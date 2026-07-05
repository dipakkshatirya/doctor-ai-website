import { useState, useRef, useEffect } from "react";
import "./Chatbot.css";

// ---- Signature icon: a stethoscope that resolves into a chat bubble ----
function AarogyaMark({ size = 26 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 6v9.5a8 8 0 0 0 16 0V6"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="14" cy="5" r="2.4" fill="white" />
      <circle cx="30" cy="5" r="2.4" fill="white" />
      <path
        d="M30 19.5v3.5a10 10 0 0 1-20 0"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M10 23c0 6.5 5.2 8.5 9 8.5"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle
        cx="35"
        cy="34"
        r="9"
        fill="white"
        fillOpacity="0.14"
        stroke="white"
        strokeWidth="2.4"
      />
      <circle cx="35" cy="34" r="4.6" fill="white" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M1.5 1.5L14.5 14.5M14.5 1.5L1.5 14.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 20 20" fill="none">
      <path
        d="M2.5 10L17 3l-5.2 14.5-2.7-6.1L2.5 10z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ClearIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
      <path
        d="M2 4h12M5.5 4V2.5A1 1 0 0 1 6.5 1.5h3a1 1 0 0 1 1 1V4M6.5 7.5v4M9.5 7.5v4M3.5 4l.5 8.5A1 1 0 0 0 5 13.5h6a1 1 0 0 0 1-1L12.5 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const WELCOME = {
  id: "welcome",
  role: "bot",
  text: "Namaste 🙏 I'm Aarogya, Dr. Sharma's care assistant. Ask me about appointments, specialties, or clinic timings.",
};

// Shown only before the visitor's first message — tap one to send it straight away.
const QUICK_REPLIES = [
  { label: "Clinic Timings", text: "What time is the clinic open?" },
  { label: "About Dr. Sharma", text: "Tell me about Dr. Aarav Sharma" },
  {
    label: "Patient Reviews",
    text: "What do patients say about Dr. Aarav Sharma?",
  },
];

// ---- Turns plain-text / markdown-lite bot replies into real structure ----
// Handles: **bold**, "1. " numbered lists, "- " or "* " bullet lists, paragraphs.
function parseBotText(text) {
  if (!text) return [];
  const lines = text
    .split("\n")
    .map((l) => l.trim())
    .filter((l) => l.length > 0);

  const blocks = [];
  let currentList = null;

  const flushList = () => {
    if (currentList) {
      blocks.push(currentList);
      currentList = null;
    }
  };

  lines.forEach((line) => {
    const numbered = line.match(/^(\d+)[.)]\s+(.*)/);
    const bulleted = line.match(/^[-*•]\s+(.*)/);

    if (numbered) {
      if (!currentList || currentList.type !== "ol") {
        flushList();
        currentList = { type: "ol", items: [] };
      }
      currentList.items.push(numbered[2]);
    } else if (bulleted) {
      if (!currentList || currentList.type !== "ul") {
        flushList();
        currentList = { type: "ul", items: [] };
      }
      currentList.items.push(bulleted[1]);
    } else {
      flushList();
      blocks.push({ type: "p", text: line });
    }
  });
  flushList();
  return blocks;
}

// Renders **bold** spans inside a single line of text.
function renderInline(text, keyPrefix) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g).filter(Boolean);
  return parts.map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={`${keyPrefix}-${i}`}>{part.slice(2, -2)}</strong>
    ) : (
      <span key={`${keyPrefix}-${i}`}>{part}</span>
    ),
  );
}

function FormattedMessage({ text }) {
  const blocks = parseBotText(text);
  return (
    <div className="ar-formatted">
      {blocks.map((block, i) => {
        if (block.type === "ol") {
          return (
            <ol className="ar-list" key={i}>
              {block.items.map((item, j) => (
                <li key={j}>{renderInline(item, `${i}-${j}`)}</li>
              ))}
            </ol>
          );
        }
        if (block.type === "ul") {
          return (
            <ul className="ar-list ar-list-bullet" key={i}>
              {block.items.map((item, j) => (
                <li key={j}>{renderInline(item, `${i}-${j}`)}</li>
              ))}
            </ul>
          );
        }
        return (
          <p className="ar-p" key={i}>
            {renderInline(block.text, `p${i}`)}
          </p>
        );
      })}
    </div>
  );
}

// Tune this to roughly match your backend's average response time.
// This drives the first "Responding in Xs" phase; once that runs out,
// the label progresses through more descriptive stages below instead of
// just sitting on "Almost there..." forever.
const ESTIMATED_WAIT_SECONDS = 5;

// elapsedSeconds counts up continuously while a reply is in flight (no cap),
// so the label keeps progressing even if the real response takes longer
// than the estimate.
function getLoadingLabel(elapsedSeconds) {
  const remaining = ESTIMATED_WAIT_SECONDS - elapsedSeconds;
  if (remaining > 0) return `Responding in ${remaining}s`;

  const overtime = elapsedSeconds - ESTIMATED_WAIT_SECONDS;
  if (overtime < 2) return "Analyzing your question...";
  if (overtime < 4) return "Preparing the best answer for you...";
  return "Almost there...";
}

function TypingSkeleton({ elapsedSeconds }) {
  return (
    <div className="ar-row ar-row-bot">
      <div className="ar-bubble ar-bubble-bot ar-skeleton">
        <div className="ar-skel-line ar-skel-line-1" />
        <div className="ar-skel-line ar-skel-line-2" />
        <div className="ar-skel-line ar-skel-line-3" />
        <div className="ar-skel-timer">
          <span className="ar-skel-timer-dot" />
          {getLoadingLabel(elapsedSeconds)}
        </div>
      </div>
    </div>
  );
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([WELCOME]);
  const [loading, setLoading] = useState(false);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [streamingId, setStreamingId] = useState(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading, elapsedSeconds, open]);

  // Ticks once a second the whole time a reply is in flight — uncapped,
  // so the loading label keeps progressing through its stages even if
  // the real response takes longer than ESTIMATED_WAIT_SECONDS.
  useEffect(() => {
    if (!loading) return;
    const interval = setInterval(() => {
      setElapsedSeconds((s) => s + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [loading]);

  const sendMessage = async (overrideText) => {
    const text = (overrideText ?? message).trim();
    if (!text || loading) return;

    const userMsg = { id: Date.now(), role: "user", text };
    setMessages((prev) => [...prev, userMsg]);
    setMessage("");
    setLoading(true);
    setElapsedSeconds(0);

    const botMsgId = Date.now() + 1;

    try {
      const response = await fetch("http://localhost:3000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });

      const contentType = response.headers.get("content-type") || "";

      // --- Backend still returns plain JSON (no streaming yet) ---
      // Falls back to the old "wait, then show everything" behaviour.
      if (contentType.includes("application/json") || !response.body) {
        const data = await response.json();
        setMessages((prev) => [
          ...prev,
          { id: botMsgId, role: "bot", text: data.reply },
        ]);
        return;
      }

      // --- Backend streams plain text chunks as they're generated ---
      // Each chunk is appended to the same bubble as soon as it arrives,
      // so the reply visibly grows instead of appearing all at once.
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let streamed = "";
      let bubbleStarted = false;

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        streamed += decoder.decode(value, { stream: true });

        if (!bubbleStarted) {
          bubbleStarted = true;
          setLoading(false); // first chunk arrived — swap skeleton for real text
          setStreamingId(botMsgId);
          setMessages((prev) => [
            ...prev,
            { id: botMsgId, role: "bot", text: streamed },
          ]);
        } else {
          setMessages((prev) =>
            prev.map((m) => (m.id === botMsgId ? { ...m, text: streamed } : m)),
          );
        }
      }
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 2,
          role: "bot",
          text: "I couldn't reach the clinic server just now. Please try again in a moment.",
        },
      ]);
    } finally {
      setLoading(false);
      setStreamingId(null);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  const clearChat = () => {
    setMessages([WELCOME]);
    setMessage("");
    setLoading(false);
    setElapsedSeconds(0);
    setStreamingId(null);
  };

  return (
    <div className="ar-widget">
      {open && (
        <div className="ar-panel" role="dialog" aria-label="Aarogya AI chat">
          <div className="ar-header">
            <div className="ar-header-left">
              <div className="ar-avatar">
                <AarogyaMark size={22} />
                <span className="ar-avatar-pulse" />
              </div>
              <div className="ar-header-text">
                <span className="ar-title">Aarogya AI</span>
                <span className="ar-subtitle">
                  <span className="ar-status-dot" /> Online &middot; Dr.
                  Sharma's Clinic
                </span>
              </div>
            </div>
            <div className="ar-header-actions">
              <button
                className="ar-clear-btn"
                onClick={clearChat}
                aria-label="Clear chat"
                title="Clear chat"
              >
                <ClearIcon />
              </button>
              <button
                className="ar-close-btn"
                onClick={() => setOpen(false)}
                aria-label="Close chat"
              >
                <CloseIcon />
              </button>
            </div>
          </div>

          <div className="ar-messages" ref={scrollRef}>
            {messages.map((m) => (
              <div
                key={m.id}
                className={`ar-row ${
                  m.role === "user" ? "ar-row-user" : "ar-row-bot"
                }`}
              >
                <div
                  className={`ar-bubble ${
                    m.role === "user" ? "ar-bubble-user" : "ar-bubble-bot"
                  } ${m.id === streamingId ? "ar-bubble-streaming" : ""}`}
                >
                  {m.role === "bot" ? (
                    <FormattedMessage text={m.text} />
                  ) : (
                    m.text
                  )}
                </div>
              </div>
            ))}

            {messages.length === 1 && !loading && (
              <div className="ar-quick-replies">
                {QUICK_REPLIES.map((q) => (
                  <button
                    key={q.label}
                    className="ar-chip"
                    onClick={() => sendMessage(q.text)}
                  >
                    {q.label}
                  </button>
                ))}
              </div>
            )}
            {loading && <TypingSkeleton elapsedSeconds={elapsedSeconds} />}
          </div>

          <div className="ar-inputbar">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask me anything..."
              className="ar-input"
            />
            <button
              className="ar-send-btn"
              onClick={() => sendMessage()}
              disabled={loading || !message.trim()}
              aria-label="Send message"
            >
              <SendIcon />
            </button>
          </div>
        </div>
      )}
      <div className="ar-fab-wrapper">
        {!open && (
          <div className="ar-chat-hint">
            <div className="ar-chat-bubble">💬 Ask AI Assistant</div>
          </div>
        )}

        <button
          className={`ar-fab ${open ? "ar-fab-open" : ""}`}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon /> : <AarogyaMark size={26} />}
          {!open && <span className="ar-fab-pulse" />}
        </button>
      </div>
    </div>
  );
}