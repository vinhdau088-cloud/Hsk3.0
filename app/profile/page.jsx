import user from "@/data/user.json";

import ProgressCard from "@/components/ProgressCard";


export default function Profile(){


return (

<main
style={{
padding:25
}}
>


<section
style={{
background:"linear-gradient(135deg,#7c3aed,#2563eb)",
color:"white",
padding:30,
borderRadius:30,
textAlign:"center"
}}
>


<img

src={user.avatar}

width="120"

height="120"

style={{
borderRadius:"50%"
}}

/>


<h1>
{user.name}
</h1>


<p>
{user.level} • {user.tocfl}
</p>


<button>
✏️ Sửa hồ sơ
</button>


</section>





<div
style={{
display:"grid",
gridTemplateColumns:"repeat(3,1fr)",
gap:15,
marginTop:25
}}
>


<ProgressCard
icon="⭐"
title="XP"
value={user.xp}
/>


<ProgressCard
icon="🔥"
title="Chuỗi"
value={user.streak+" ngày"}
/>


<ProgressCard
icon="📚"
title="Từ"
value={user.wordsLearned}
/>


</div>







<div
style={{
background:"white",
marginTop:25,
padding:25,
borderRadius:25
}}
>


<h2>
📈 Tiến độ {user.level}
</h2>


<div
style={{
height:15,
background:"#ddd",
borderRadius:20
}}
>

<div
style={{
width:user.progress+"%",
height:"100%",
background:"#7c3aed",
borderRadius:20
}}
>

</div>


</div>


<p>
{user.progress}% hoàn thành
</p>


</div>







<div
style={{
background:"white",
marginTop:25,
padding:25,
borderRadius:25
}}
>

<h2>
🏆 Thành tích
</h2>


{

user.badges.map((b)=>(

<p key={b}>
{b}
</p>

))

}


</div>







<div
style={{
background:"white",
marginTop:25,
padding:25,
borderRadius:25
}}
>


<h2>
📝 Lịch sử thi
</h2>


{

user.examHistory.map((e)=>(

<p key={e.name}>
{e.name} : {e.score}
</p>

))

}


</div>


</main>

)

}
