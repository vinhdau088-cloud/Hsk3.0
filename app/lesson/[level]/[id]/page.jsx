import lesson from
"@/data/hsk/hsk1/lesson1.json";


import Vocabulary from
"@/components/Vocabulary";


import Grammar from
"@/components/Grammar";



export default async function Page(){

return(

<main style={{padding:25}}>


<h1>
📘 {lesson.title}
</h1>


<Vocabulary

words={lesson.vocabulary}

/>


<Grammar

data={lesson.grammar}

/>



<h2>
🎬 Video
</h2>


<video
controls
width="100%"
>

<source src={lesson.video}/>

</video>



<h2>
📝 Bài tập
</h2>


{

lesson.exercise.map((e)=>(

<div key={e.question}>

<p>
{e.question}
</p>

</div>

))

}



</main>

)

}
