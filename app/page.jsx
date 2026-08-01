import Navbar from "@/components/Navbar";


export default function Home(){

return (

<>

<Navbar/>


<main className="container">


<section className="hero">

<h1>
Xin chào 👋
</h1>

<h2>
ChineseMaster AI
</h2>

<p>
Học tiếng Trung HSK & TOCFL mỗi ngày
</p>


</section>





<div className="grid">


<div className="card">
📚
<h2>HSK</h2>
<p>HSK 1 - HSK 6</p>
</div>



<div className="card">
🇹🇼
<h2>TOCFL</h2>
<p>A1 - C2</p>
</div>



<div className="card">
📝
<h2>Luyện thi</h2>
<p>Nghe - Đọc - Viết</p>
</div>



<div className="card">
👥
<h2>Cộng đồng</h2>
<p>Chia sẻ học tập</p>
</div>



<div className="card">
🃏
<h2>Flashcard</h2>
<p>Học từ vựng</p>
</div>



<div className="card">
👤
<h2>Hồ sơ</h2>
<p>Tiến độ học</p>
</div>



</div>


</main>


</>

)

}
