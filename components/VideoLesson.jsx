export default function VideoLesson({video}){

return(

<div
style={{
background:"white",
padding:20,
borderRadius:25
}}
>

<h2>
🎬 {video.title}
</h2>


<iframe

width="100%"

height="300"

src={video.video}

allowFullScreen

/>


<p>
{video.description}
</p>


</div>

)

}
