export default function Grammar({data}){

return(

<div>

<h2>
📖 Ngữ pháp
</h2>


{
data.map((g)=>(

<div key={g.title}>

<h3>
{g.title}
</h3>

<p>
{g.content}
</p>

</div>

))

}

</div>

)

}
