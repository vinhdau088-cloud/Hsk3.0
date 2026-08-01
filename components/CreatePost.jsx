"use client";

import {useState} from "react";


export default function CreatePost(){


const [text,setText]=useState("");



return (

<div
style={{
background:"white",
padding:20,
borderRadius:25
}}
>


<textarea

placeholder="Bạn đang học gì hôm nay?"

value={text}

onChange={(e)=>setText(e.target.value)}

style={{
width:"100%",
height:100,
borderRadius:15
}}

/>


<button>

Đăng bài

</button>


</div>

)

}
