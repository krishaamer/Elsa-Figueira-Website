export default function ContactModal({ open, onClose, dict }) {
  return (
    <div className={`ui basic modal contact ${open ? "active visible" : ""}`} style={{ display: open ? "block" : "none" }}>
      <i className="close icon" onClick={onClose} role="button" aria-label="Close" />
      <div className="header">
        Get in touch at <a href="mailto:kris@haam.co">kris@haam.co</a> or +372 53073123
      </div>
      <div className="content"></div>
    </div>
  );
}

