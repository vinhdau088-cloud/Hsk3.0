export default function Vocabulary({words}){

return(

<div>

<h2>
📚 Từ vựng
</h2>


{
words.map((word)=>(

<div
key={word.hanzi}
className="card"
>

<h1>
{word.hanzi}
</h1>

<p>
{word.pinyin}
</p>

<p>
🇻🇳 {word.meaning}
</p>

</div>

))
}

</div>

)

}
