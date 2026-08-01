"use client";

import {useState} from "react";


export default function ChatBox(){

const [msg,setMsg]=useState("");

const [answer,setAnswer]=useState("");

async function send(){

const res=
await fetch("/api/ai",{

method:"POST",

body:JSON.stringify({
message:msg
})

});


const data=await res.json();

setAnswer(data.answer);

}


return (

<div>

<textarea

onChange={
e=>setMsg(e.target.value)
}

/>


<button onClick={send}>
🤖 Hỏi AI
</button>


<p>
{answer}
</p>


</div>

)

}
