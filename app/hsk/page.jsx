import BookCard from "@/components/BookCard";

const books = [
  { level: "hsk1", title: "HSK 1", color: "#22c55e" },
  { level: "hsk2", title: "HSK 2", color: "#3b82f6" },
  { level: "hsk3", title: "HSK 3", color: "#8b5cf6" },
  { level: "hsk4", title: "HSK 4", color: "#f97316" },
  { level: "hsk5", title: "HSK 5", color: "#ef4444" },
  { level: "hsk6", title: "HSK 6", color: "#0f172a" }
];

export default function HSKPage() {
  return (
    <main style={{ padding: 25 }}>
      <h1>📚 Thư viện HSK</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: 20
        }}
      >
        {books.map((book) => (
          <BookCard key={book.level} {...book} />
        ))}
      </div>
    </main>
  );
}
