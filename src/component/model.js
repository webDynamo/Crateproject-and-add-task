import { forwardRef,useImperativeHandle,useRef } from "react"
import {createPortal} from "react-dom"
import Button from "./button";
const Modal=forwardRef(function Model({children,buttoncaption},ref){
    const dialog=useRef();

    useImperativeHandle(ref,()=>{
        return{
            open(){
                dialog.current.showModal();
            }
        }
    })

    
return createPortal(
        <dialog ref={dialog} className="p-5 border border-slate-300 rounded-xl mx-auto">
            {children}
            <from method="dialog">
               <Button>{buttoncaption}</Button>
            </from>
        </dialog>,document.getElementById("modal-root")
    )
})
 export default Modal;