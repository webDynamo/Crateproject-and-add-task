import Button from "./button";

export default function Sidebar({onstartAddProject,
        projects,
        onselect,
        selectedProjectId}){
    return(
        <aside className="w-1/3 py-10 px-6 bg-stone-900 text-slate-50 rounded-r-lg md:w-72">
            <h2 className="font-extrabold mb-8 text-xl md:text-3xl text-slate-100  uppercase">Your project </h2>
            <div>
            <Button onClick={onstartAddProject} children='+ Add Project'/>
            </div>
            <ul className="mt-6">
            {projects.map((project)=>{
                let cssclass=" px-2 list-none bg-stone-600 rounded-md   hover:bg-stone-700 hover:text-slate-100 mt-1 w-32 text-start" 
              if(project.id===selectedProjectId){
                  cssclass=+"bg-stone-800 text-stone-300"
              }else{
                  cssclass=+ "text-stone-400"
              }

                return(
                    <li key={project.id}>
                    <button className="cssclass"
            onClick={()=>onselect(project.id)}>{project.title}
         </button>
             </li>)
                
            }
          
            )}
            </ul>
        </aside>
    )
}