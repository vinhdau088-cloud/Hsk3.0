"use client";

import {useState} from "react";


export default function AddVideo(){


const [title,setTitle]=useState("");

const [url,setUrl]=useState("");



async function save(){


await fetch("/api/videos",{

method:"POST",

body:JSON.stringify({

title,

url,

level:"HSK1"

})

});


alert("Đã thêm video");

}



return (

<main style={{padding:25}}>

<h1>
🎬 Thêm Video
</h1>


<input

placeholder="Tên video"

onChange={
e=>setTitle(e.target.value)
}

/>


<input

placeholder="Link video"

onChange={
e=>setUrl(e.target.value)
}

/>


<button onClick={save}>
Lưu
</button>


</main>

)

}
