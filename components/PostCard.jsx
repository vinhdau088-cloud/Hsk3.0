"use client";

import { useState } from "react";

export default function PostCard({ post }) {

  const [like, setLike] = useState(post?.likes || 0);

  const comments = Array.isArray(post?.comments)
    ? post.comments
    : [];

  return (
    <div
      style={{
        background: "white",
        padding: 25,
        borderRadius: 25,
        marginBottom: 20
      }}
    >

      <div>

        <img
          src={post?.avatar || "/avatar.png"}
          width="50"
          height="50"
          style={{
            borderRadius: "50%"
          }}
        />

        <b>
          {post?.user || "User"}
        </b>

      </div>


      <p
        style={{
          fontSize: 18
        }}
      >
        {post?.content}
      </p>


      <button
        onClick={() => setLike(like + 1)}
      >
        ❤️ {like}
      </button>


      <h3>
        💬 Bình luận
      </h3>


      {
        comments.map((c, i) => (
          <p key={i}>
            - {c}
          </p>
        ))
      }


    </div>
  );
}
