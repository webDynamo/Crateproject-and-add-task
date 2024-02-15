import { useState } from "react"

export default function Newtask({onAdd}){
    const [inputtask,setinputtask]=useState("")
    function handleaddtask(event){
        setinputtask(event.target.value)
        console.log(inputtask)
        
       
    }
    function handleclicktask(){
     if(inputtask!==""){
        onAdd(inputtask)
        setinputtask("")
     }
       
    }
    return(
        <div className="flex items-center gap-4">
            <input type="text " className="w-64 px-2 py-1 rounded-md
            outline-none border border-stone-300"
            value={inputtask}
            onChange={handleaddtask}/>
            <button className="px-3 py-1 rounded-md bg-red-300 hover:font-bold"
            onClick={handleclicktask}>
            Add Task
            </button>
        </div>
    )
}