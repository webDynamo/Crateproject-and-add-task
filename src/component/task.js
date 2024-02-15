import Newtask from "./NewTask";

export default function Task({tasks,onAdd,onDelete}){
    console.log("tasks",tasks)
   
    return(
        <section>
            <h2 className="text-2xl font-bold text-stone-600 mb-4 rounded-md
            ">Tasks</h2>
            <Newtask onAdd={onAdd}/>
           {tasks.length===0 && (
                <p className="mt-3">This project does not have any task</p>
                )}
            {tasks.length>0 &&(
            <ul className="p-4 mt-8 rounded-md bg-stone-200 ">
                {tasks.map((task)=><li className="flex justify-between items-center" key={task.id}>
                <span>{task.tasks}</span>
                <button className="px-3 py-1 border border-stone-300 bg-red-300 
                 rounded-md" onClick={(e)=>onDelete(task.id)}>clear</button></li>)}
            </ul>)}
        </section>
    )
}