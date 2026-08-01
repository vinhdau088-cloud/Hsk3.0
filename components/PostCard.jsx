"use client";

import {useState} from "react";


export default function PostCard({post}){


const [like,setLike]=useState(post.likes);


return (

<div
style={{
background:"white",
padding:25,
borderRadius:25,
marginBottom:20
}}
>


<div>

<img

src={post.avatar}

width="50"

height="50"

style={{
borderRadius:"50%"
}}

/>


<b>
{post.user}
</b>


</div>



<p
style={{
fontSize:18
}}
>
{post.content}
</p>



<button

onClick={()=>setLike(like+1)}

>

❤️ {like}

</button>




<h3>
💬 Bình luận
</h3>


{

post.comments.map((c,i)=>(

<p key={i}>
- {c}
</p>

))

}


</div>

)

}
