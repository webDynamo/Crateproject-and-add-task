const Button=({children,...props})=>{
    return(
        <>
            <button className="px-4 py-2 md:text-xl bg-stone-600 rounded-md
            hover:bg-stone-700 hover:text-slate-100" {...props}>{children}</button>
        </>
    )
}
export default Button