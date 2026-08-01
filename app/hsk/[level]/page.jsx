export default async function Lesson({ params }) {

  const { level } = await params;

  return (
    <main style={{ padding: 25 }}>
      <h1>{level.toUpperCase()}</h1>

      <div
        style={{
          background: "white",
          padding: 25,
          borderRadius: 20
        }}
      >
        <h2>📖 Danh sách bài học</h2>

        <button>Bài 1</button>
        <button>Bài 2</button>
        <button>Bài 3</button>
        <button>Bài 4</button>

        <hr />

        <p>Sau này các bài sẽ được đọc tự động từ file JSON.</p>
      </div>
    </main>
  );
}
