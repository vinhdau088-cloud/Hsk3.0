"use client";

import Link from "next/link";
import {useState} from "react";


export default function Sidebar(){

const [open,setOpen]=useState(false);


return (

<>

<button
onClick={()=>setOpen(true)}
style={{
fontSize:30,
background:"none",
border:0
}}
>
☰
</button>



{
open &&

<div
style={{
position:"fixed",
top:0,
left:0,
width:300,
height:"100%",
background:"white",
padding:25,
boxShadow:"5px 0 20px #ddd"
}}
>


<button
onClick={()=>setOpen(false)}
>
✖
</button>


<h2>
🇨🇳 ChineseMaster
</h2>


<Link href="/hsk">
📚 HSK
</Link>

<br/>

<Link href="/tocfl">
🇹🇼 TOCFL
</Link>

<br/>

<Link href="/flashcard">
🃏 Flashcard
</Link>

<br/>

<Link href="/dictionary">
🔎 Tra từ
</Link>

<br/>

<Link href="/exam">
📝 Thi thử
</Link>

<br/>

<Link href="/community">
👥 Cộng đồng
</Link>

<br/>

<Link href="/profile">
👤 Hồ sơ
</Link>

<br/>

<Link href="/ai">
🤖 AI Tutor
</Link>


</div>

}

</>

)

}
