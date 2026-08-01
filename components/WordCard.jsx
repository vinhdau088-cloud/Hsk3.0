export default function WordCard({word}){


return(

<div
style={{
background:"white",
padding:20,
borderRadius:20
}}
>

<h1>
{word.traditional}
</h1>


<p>
{word.zhuyin}
</p>


<p>
{word.pinyin}
</p>


<h3>
🇻🇳 {word.meaning}
</h3>


<p>
{word.example}
</p>


<p>
{word.translate}
</p>


</div>

)

}
