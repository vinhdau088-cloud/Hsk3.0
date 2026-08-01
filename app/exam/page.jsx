"use client";


import {useState} from "react";

import questions from "@/data/exam.json";

import Question from "@/components/Question";


export default function Exam(){


const [index,setIndex]=useState(0);

const [score,setScore]=useState(0);

const [done,setDone]=useState(false);



function answer(value){


if(value===questions[index].answer){

setScore(score+1);

}


if(index+1 < questions.length){

setIndex(index+1);

}

else{

setDone(true);

}


}



if(done){

return (

<main>

<h1>
🎉 Kết quả
</h1>


<h2>
Điểm: {score}/{questions.length}
</h2>


</main>

)

}



return (

<main style={{padding:25}}>


<h1>
📝 Thi HSK
</h1>


<Question

question={questions[index]}

number={index+1}

onAnswer={answer}

/>


</main>

)

}
