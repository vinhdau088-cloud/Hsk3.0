import speaking from "@/data/speaking.json";

import AudioPlayer from "@/components/AudioPlayer";

import Recorder from "@/components/Recorder";


export default function Speaking(){


const lesson=speaking[0];


return (

<main style={{padding:25}}>


<h1>
🎤 Luyện nói tiếng Trung
</h1>


<div
style={{
background:"white",
padding:25,
borderRadius:25
}}
>


<h2>
{lesson.text}
</h2>


<p>
{lesson.pinyin}
</p>


<p>
🇻🇳 {lesson.meaning}
</p>


<AudioPlayer
src={lesson.audio}
/>


<hr/>


<h3>
Đọc lại câu trên
</h3>


<Recorder/>


</div>


</main>

)

}
