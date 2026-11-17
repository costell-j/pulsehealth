import { useEffect } from "react";
import { API_BASE_URL } from "../../config";
import "./GuideModal.css";

const GuideModal = ({ guide, onClose }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEscape);

    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  return (
    <div className="guide-modal-overlay" onClick={onClose}>
      <article
        className="guide-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="guide-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="guide-modal-close"
          onClick={onClose}
          aria-label="Close guide"
        >
          &times;
        </button>

        <header className="guide-modal-header">
          <span className="mini-head">{guide.category}</span>
          <h2 id="guide-modal-title">{guide.title}</h2>
          <p>{guide.read_time}</p>
        </header>

        <div className="guide-modal-content">
          <p className="guide-modal-text">{guide.text}</p>
        </div>
      </article>
    </div>
  );
};

export default GuideModal;
