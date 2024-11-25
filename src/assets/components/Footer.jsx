import React from "react"

function Footer(){


return(
<div className="w-full ">

<div className="max-w-screen-xl mx-auto py-10 flex gap-36">
    
<div className="basis-1/2  " > 

<h1 className="text-[12rem] font-semibold leading-none ">refokus.</h1>
</div>

<div className="basis-1/2 flex gap-4 ">
<div className="basis-1/3" >
<h3 className="mb-10  text-zinc-400 capitalize">Socials</h3>
{["Instagram","Twitter (x?)","LinkedIn"].map((item,index)=><a key={index} className="block mt-3 capitalize text-zinc-600">{item}</a>)}
</div>
<div className="basis-1/3 " >
<h3 className="mb-10  text-zinc-400 capitalize">Sitemaps</h3>
{["Home","Work","Careers","Contact"].map((item,index)=><a key={index} className="block mt-3 capitalize text-zinc-600">{item}</a>)}
</div>
<div className="basis-1/3 text-[1.1rem] flex flex-col items-end">
<p className="text-right ">Refokus is pioneering digital agency driven by design and empowered by technology.</p>
<img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg " className="w-20 mt-10 bg-blue-600  h-4 w-40 text-center"></img>
</div>

</div>
</div>
</div>
)
}
export default Footer