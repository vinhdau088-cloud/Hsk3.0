export default function VideoCard({video}){

return (

<div
style={{
background:"white",
padding:20,
borderRadius:25,
marginBottom:20
}}
>

<h2>
🎬 {video.title}
</h2>


{
video.type==="youtube"

?

<iframe

width="100%"

height="300"

src={video.url}

allowFullScreen

/>

:

<video

controls

width="100%"

>

<source src={video.url}/>

</video>

}



<p>
{video.description}
</p>


</div>

)

}
