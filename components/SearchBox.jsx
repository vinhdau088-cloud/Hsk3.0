"use client";

import { useState } from "react";


export default function SearchBox({ words }) {

const [search,setSearch] = useState("");


const result = words.filter((word)=>{

return (

word.hanzi.includes(search) ||

word.pinyin.includes(search) ||

word.meaning.includes(search)

);

});


return (

<div>


<input

placeholder="🔎 Nhập từ cần tra..."

value={search}

onChange={(e)=>setSearch(e.target.value)}

style={{
width:"100%",
padding:15,
borderRadius:20,
fontSize:18
}}

/>



<div>

{

search && result.map(word=>(

<div

key={word.id}

style={{
background:"white",
padding:20,
marginTop:15,
borderRadius:20
}}

>


<h1>
{word.hanzi}
</h1>


<p>
🔊 {word.pinyin}
</p>


<p>
{word.zhuyin}
</p>


<h3>
🇻🇳 {word.meaning}
</h3>


<p>
📖 {word.example}
</p>


<p>
{word.translate}
</p>


</div>


))

}


</div>


</div>

)

}
