import React from "react"

function Stripe({val}) {

    return(

        <div className="w-[16.66%] px-4 py-3 border-t-[.5px] border-b-[.5px] border-r-[.5px] flex justify-between items-center border-zinc-600">
       <img src={val.url}></img>
        <span className="font-semibold">{val.number}</span>   
        </div>
    )
}
export default Stripe