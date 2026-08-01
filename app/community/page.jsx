import PostCard from "@/components/PostCard";
import CreatePost from "@/components/CreatePost";
import postsData from "@/data/posts.json";

export default function Community() {

  const posts = Array.isArray(postsData)
    ? postsData
    : [];

  return (
    <main style={{ padding: 25 }}>

      <h1>
        👥 Cộng đồng ChineseMaster
      </h1>

      <CreatePost />

      <br />

      <h2>
        🔥 Bài viết mới
      </h2>

      {
        posts.length > 0 ? (
          posts.map((post) => (
            <PostCard
              key={post.id}
              post={post}
            />
          ))
        ) : (
          <p>
            Chưa có bài viết nào
          </p>
        )
      }

    </main>
  );
}
