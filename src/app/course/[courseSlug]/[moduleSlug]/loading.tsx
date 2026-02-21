export default function Loading() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "60vh",
        gap: "1.5rem",
      }}
    >
      {/* Spinner */}
      <div
        style={{
          width: "48px",
          height: "48px",
          border: "3px solid rgba(255, 255, 255, 0.1)",
          borderTopColor: "var(--color-primary, #3b82f6)",
          borderRadius: "50%",
          animation: "spin 0.8s linear infinite",
        }}
      />
      <p
        style={{
          color: "var(--color-text-dim, #94a3b8)",
          fontSize: "0.95rem",
        }}
      >
        Загрузка...
      </p>

      {/* Keyframe animation */}
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
