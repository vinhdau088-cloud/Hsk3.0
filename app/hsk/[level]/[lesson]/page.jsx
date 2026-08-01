import words from "@/data/hsk1.json";

export default function HSK1() {
  return (
    <main className="max-w-5xl mx-auto p-6">

      <h1 className="text-4xl font-bold mb-8">
        📚 HSK 1
      </h1>

      <div className="grid gap-6">

        {words.map((word) => (

          <div
            key={word.id}
            className="bg-white rounded-3xl shadow-lg p-6"
          >

            <h2 className="text-5xl font-bold text-center">
              {word.hanzi}
            </h2>

            <p className="text-center text-xl text-gray-600 mt-3">
              {word.pinyin}
            </p>

            <p className="text-center text-lg">
              {word.zhuyin}
            </p>

            <hr className="my-5"/>

            <h3 className="font-semibold">
              🇻🇳 Nghĩa
            </h3>

            <p>{word.meaning}</p>

            <br/>

            <h3 className="font-semibold">
              📖 Ví dụ
            </h3>

            <p>{word.example}</p>

            <p className="text-gray-500">
              {word.translate}
            </p>

            <audio controls className="w-full mt-4">
              <source src={word.audio}/>
            </audio>

            <div className="flex gap-3 mt-5">

              <button className="bg-blue-600 text-white px-4 py-2 rounded-xl">
                🔊 Nghe
              </button>

              <button className="bg-red-500 text-white px-4 py-2 rounded-xl">
                ❤️ Lưu
              </button>

              <button className="bg-green-600 text-white px-4 py-2 rounded-xl">
                🃏 Flashcard
              </button>

            </div>

          </div>

        ))}

      </div>

    </main>
  );
}
