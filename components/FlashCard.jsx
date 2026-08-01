"use client";

import { useState } from "react";

export default function FlashCard({ word }) {
  const [flip, setFlip] = useState(false);

  return (
    <div
      onClick={() => setFlip(!flip)}
      style={{
        background: "#fff",
        borderRadius: 25,
        padding: 35,
        minHeight: 300,
        cursor: "pointer",
        boxShadow: "0 10px 25px rgba(0,0,0,.1)"
      }}
    >
      {!flip ? (
        <>
          <h1 style={{ fontSize: 60 }}>{word.hanzi}</h1>

          <p>Chạm để lật thẻ</p>
        </>
      ) : (
        <>
          <h1>{word.hanzi}</h1>

          <h2>{word.pinyin}</h2>

          <h3>{word.zhuyin}</h3>

          <p>{word.meaning}</p>

          <hr />

          <p>{word.example}</p>

          <p>{word.translate}</p>
        </>
      )}
    </div>
  );
}
