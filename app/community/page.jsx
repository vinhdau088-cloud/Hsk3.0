import posts from "@/data/posts.json";

import PostCard from "@/components/PostCard";

import CreatePost from "@/components/CreatePost";


export default function Community(){


return (

<main
style={{
padding:25
}}
>


<h1>
👥 Cộng đồng ChineseMaster
</h1>


<CreatePost />

<br/>


<h2>
🔥 Bài viết mới
</h2>


{

posts.map(post=>(

<PostCard

key={post.id}

post={post}

/>

))

}



</main>

)

}
