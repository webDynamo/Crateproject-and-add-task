

import { useState } from "react";
import NewProject from "./component/newproject";
import Noproject from "./component/noproject";
import Selectedproject from "./component/selected";
import Sidebar from "./component/sidebor";


function App() {
  const [projectState,setprojectState]=useState({
    selectedProjectId:undefined,
    projects:[],
    tasks:[]
  })
 
  function handleAddtask(text){
   setprojectState((prevState)=>
   {
    const taskId=Math.random();
      const newtask={
        tasks:text,
        projectId:prevState.selectedProjectId,
        id:taskId
      };
      return{
        ...prevState,
        tasks:[newtask,...prevState.tasks]

      }
  })}
  function handledeletetask(id){
    setprojectState(prevState=>{
      return{
        ...prevState,
      tasks:prevState.tasks.filter((taks)=>taks.id!==id)
      }
    })
  }

  function handlecanceal(){
    setprojectState(prevState=>{
      return{
        ...prevState,
        selectedProjectId:undefined
      }
    })

  }

  function handledelete(){
    setprojectState(prevState=>{
      return{
        ...prevState,
        selectedProjectId:undefined,
        projects:prevState.projects.filter((product)=>product.id!==prevState.selectedProjectId)
      }
    })
  }

  function handleStartAddProject(){
    setprojectState(prevState=>{
      return{
        ...prevState,
        selectedProjectId:null
      }
    })
  }
  function handledselected(id){
    setprojectState(prevState=>{
      return{
        ...prevState,
        selectedProjectId:id
      }
     })}
  function handleAddProject(projectData){
    const projectId=(Math.random())
    setprojectState(prevState=>{
      const newProject={
        ...projectData,
        id:projectId
      }
      return{
        ...prevState,
        selectedProjectId:undefined,
        projects:[...prevState.projects,newProject]
      }
    })
  
  }
  const selectedpro=projectState.projects.find(project=>project.id===projectState.selectedProjectId)

  let content=<Selectedproject 
    project={selectedpro}
    ondelete={handledelete}
    onAddtask={handleAddtask}
    onDeletetask={handledeletetask}
    tasks={projectState.tasks}/>;

  if(projectState.selectedProjectId===null){
    content=<NewProject onAdd={handleAddProject} onCancel={handlecanceal}/>
  }else if(projectState.selectedProjectId===undefined){
    content=<Noproject onstartAddProject={handleStartAddProject} />
  }
return (
    <div className="flex h-screen gap-8">
    <Sidebar onstartAddProject={handleStartAddProject}
    projects={projectState.projects}
    onselect={handledselected}/>
   
    {content}
    </div>
  );
}

export default App;
