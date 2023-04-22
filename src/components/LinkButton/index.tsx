interface LinkInterface {
    name: String
}

export function LinkButton({name}: LinkInterface){
    return (
        <div className="flex relative items-center justify-center mt-8 w-4/5 md:w-2/5 h-12 border-[1px] border-white rounded-lg cursor-pointer bg-transparent hover:bg-zinc-500/20 active:bg-zinc-600/20 ">
            <p>{name}</p>
        </div>
    )
}