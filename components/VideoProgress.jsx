export default function VideoProgress({

watched,
total

}){


const percent =
Math.round(
(watched/total)*100
);


return (

<div>

<h3>
🎬 Tiến độ video
</h3>


<div
style={{
height:15,
background:"#ddd",
borderRadius:20
}}
>

<div

style={{
width:percent+"%",
height:"100%",
background:"#22c55e",
borderRadius:20
}}

></div>


</div>


<p>
{percent}% hoàn thành
</p>


</div>

)

}
