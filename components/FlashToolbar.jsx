"use client";

import { saveFavorite } from "@/lib/favorite";

export default function FlashToolbar({ word }) {

  return (

    <div className="toolbar">

      <button>🔊 Nghe</button>

      <button onClick={() => saveFavorite(word)}>
        ❤️ Lưu
      </button>

      <button>⭐ Đã nhớ</button>

      <button>🔁 Ôn lại</button>

    </div>

  );

}
