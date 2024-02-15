import Button from "./button";
import Logo from "./Project.svg"

const Noproject=({onstartAddProject})=>{
    return(
        <div className="mt-24 text-center w-2/3">
            <img src={Logo} alt="" 
            className="w-16 h-16 object-contain mx-auto"/>
            <h2 className="text-xl font-extrabold my-4 text-stone-500"> No project selected</h2>
            <p className="text-stone-400 mb-4">Selected a project or get started with new one</p>
            <p className="mt-8">
            <Button onClick={onstartAddProject} children='Create a new Project'/>
            </p>
        </div>
    )
}

export default Noproject;