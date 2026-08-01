import Link from "next/link";


const levels=[
"A1",
"A2",
"B1",
"B2",
"C1",
"C2"
];


export default function TOCFL(){


return(

<main style={{padding:25}}>

<h1>
🇹🇼 TOCFL
</h1>


<div>

{
levels.map(level=>(

<Link
key={level}
href={`/tocfl/${level}`}
>

<div
style={{
background:"white",
padding:25,
margin:15,
borderRadius:20
}}
>

📘 TOCFL {level}

</div>

</Link>

))
}

</div>


</main>

)

}
