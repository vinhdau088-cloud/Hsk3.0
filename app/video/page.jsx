import videos from "@/data/videos.json";

import VideoCard from "@/components/VideoCard";


export default function VideoPage(){

return (

<main style={{padding:25}}>


<h1>
🎬 Video học tiếng Trung
</h1>


{

videos.map(video=>(

<VideoCard

key={video.id}

video={video}

/>

))

}


</main>

)

}
