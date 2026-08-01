import Link from "next/link";


export default function Admin(){


return (

<main style={{padding:30}}>

<h1>
⚙️ Admin ChineseMaster
</h1>


<Link href="/admin/words">
📚 Quản lý từ vựng
</Link>

<br/>


<Link href="/admin/videos">
🎬 Quản lý video
</Link>

<br/>


<Link href="/admin/exams">
📝 Quản lý đề thi
</Link>


</main>

)

}
