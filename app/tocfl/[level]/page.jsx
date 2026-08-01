import WordCard from "@/components/WordCard";

import VideoLesson from "@/components/VideoLesson";


import a1 from "@/data/tocfl/a1.json";

import videos from "@/data/tocfl/video.json";



export default async function Page({params}){


const {level}=await params;


const words =
level==="A1"
?
a1
:
[];



const video =
videos.find(
v=>v.level===level
);



return(

<main style={{padding:25}}>


<h1>
🇹🇼 TOCFL {level}
</h1>


<h2>
📚 Từ vựng
</h2>


{

words.map(word=>(

<WordCard

key={word.id}

word={word}

/>

))

}



<h2>
🎬 Video
</h2>


{

video &&

<VideoLesson video={video}/>

}


</main>

)

}
