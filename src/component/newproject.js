import Input from "./input";
import { useRef } from "react";
import Modal from "./model";


export default function NewProject({onAdd,onCancel}){
    const title=useRef() 
    const description=useRef()
    const duedate=useRef()
    const modal=useRef()
    function handlesave(){
        const enteredtitle=title.current.value;
        const entereddescription=description.current.value;
        const enteredduedate=duedate.current.value;
        if(enteredtitle.trim()===""||entereddescription.trim()===""||enteredduedate===""){
            modal.current.open()
           
            return;
        }

        onAdd({
            title:enteredtitle,
            description:entereddescription,
            duedate:enteredduedate
        })
    }
    return(
        <>
       <Modal ref={modal} buttoncaption="close" >
           <h1 className="text-center rounded-xl bg-slate-500">Obs............</h1>
           <p className="mt-4">You have entered a invalid input</p>
           <p>Please a valid input again.............</p>
        
       </Modal>
        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li><button onClick={onCancel}>Cancel</button></li>
                <li><button className="px-4 py-1 bg-stone-950 text-stone-50
                rounded-md" onClick={handlesave}>Save</button></li>
            </menu>
            <div>
              <Input ref={title} type="text" label="title"/>
              <Input ref={description} type="text" label="Description" textarea/>
              <Input ref={duedate} type="date" label="Date"/>
            </div>
        </div>
        </>
    )
}