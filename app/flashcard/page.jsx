import FlashCard from "@/components/FlashCard";
import FlashToolbar from "@/components/FlashToolbar";

import words from "@/data/hsk1.json";

export default function FlashPage() {
  const word = words[0];

  return (
    <main
      style={{
        maxWidth: 700,
        margin: "40px auto",
        padding: 20
      }}
    >
      <h1>🃏 Flashcard HSK</h1>

      <FlashCard word={word} />

      <FlashToolbar />
    </main>
  );
}
