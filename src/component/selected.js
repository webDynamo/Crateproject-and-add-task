import Button from "./button";
import Task from "./task";

export default function Selectedproject({project,ondelete,onAddtask,onDeletetask,tasks }){
    const time= new Date().toDateString()
   console.log(onDeletetask)

    return(
        <>
        <header className="w-2/5 m-10 p-5 border border-stone-300 rounded-md overflow-auto">
            <div className='flex justify-between items-center'>
                <h1 className="w-96 h-8 text-justify px-3 bg-slate-200 font-bold border border-black shadow-sm rounded-md">
                <p>Your Project:-{project.title}</p> </h1>
                <button onClick={ondelete} className="px-3 py-2 rounded-md bg-red-300">Delete</button>
            </div>
            <div className="flex flex-col justify-center gap-4 w-full mt-5">
                <h3 className="font-bold">This your description about the above project</h3>
                <p className=" whitespace-break-spaces  w-full">{project.description}</p>
                <p className="mt-10">{time}</p>
                <Task onAdd={onAddtask} onDelete={onDeletetask} tasks={tasks}/>
            </div>
           
        </header>
        </>
    )


}