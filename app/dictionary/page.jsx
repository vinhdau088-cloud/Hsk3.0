import SearchBox from "@/components/SearchBox";

import words from "@/data/hsk1.json";


export default function Dictionary(){


return (

<main
style={{
padding:25
}}
>


<h1>
🔎 Tra từ Trung - Việt
</h1>


<SearchBox words={words}/>


</main>

)


}
