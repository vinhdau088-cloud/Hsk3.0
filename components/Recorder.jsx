"use client";

import {useState} from "react";


export default function Recorder(){

const [recording,setRecording]=useState(false);


function start(){

setRecording(true);

}


function stop(){

setRecording(false);

}


return (

<div>

<button onClick={start}>
🎤 Bắt đầu
</button>


<button onClick={stop}>
⏹ Dừng
</button>


<p>
{
recording
?
"Đang ghi âm..."
:
"Chưa ghi"
}
</p>


</div>

)

}
