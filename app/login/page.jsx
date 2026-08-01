"use client";


import {signIn} from "next-auth/react";


export default function Login(){


return (

<main
style={{
padding:40,
textAlign:"center"
}}
>


<h1>
🇨🇳 ChineseMaster
</h1>


<h2>
Đăng nhập để lưu tiến độ học
</h2>


<button

onClick={()=>signIn("google")}

style={{
padding:15,
borderRadius:20
}}

>

🔵 Đăng nhập Google

</button>


</main>

)

}
