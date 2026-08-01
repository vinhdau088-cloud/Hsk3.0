export default function ProgressCard({
title,
value,
icon
}){


return (

<div
style={{
background:"white",
padding:20,
borderRadius:20,
boxShadow:"0 5px 15px #ddd"
}}
>

<h2>
{icon} {title}
</h2>


<p
style={{
fontSize:30,
fontWeight:"bold"
}}
>
{value}
</p>


</div>

)

}
