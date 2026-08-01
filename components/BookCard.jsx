import Link from "next/link";

export default function BookCard({ level, title, color }) {
  return (
    <Link href={`/hsk/${level}`} style={{ textDecoration: "none" }}>
      <div
        style={{
          background: color,
          color: "white",
          borderRadius: 20,
          padding: 24,
          minHeight: 220,
          boxShadow: "0 12px 25px rgba(0,0,0,.15)",
          transition: ".2s"
        }}
      >
        <div style={{ fontSize: 60 }}>📕</div>

        <h2>{level}</h2>

        <p>{title}</p>

        <small>Nhấn để mở sách</small>
      </div>
    </Link>
  );
}
