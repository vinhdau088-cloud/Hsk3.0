import {ai} from "@/lib/ai";


export async function POST(req){

const {message}=await req.json();


const result =
await ai.chat.completions.create({

model:"gpt-4.1-mini",

messages:[

{
role:"system",
content:
"Bạn là giáo viên tiếng Trung HSK TOCFL."
},

{
role:"user",
content:message
}

]

});


return Response.json({

answer:
result.choices[0].message.content

});

}
