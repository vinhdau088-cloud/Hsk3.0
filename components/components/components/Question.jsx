"use client";

export default function Question({
question,
number,
onAnswer
}){


return (

<div className="card">

<h2>
Câu {number}
</h2>


<p>
{question.question}
</p>


{
question.options &&

question.options.map(item=>(

<button

key={item}

onClick={()=>onAnswer(item)}

>

{item}

</button>

))

}


</div>

)

}
