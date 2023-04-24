import Image from "next/image"

export function Avatar(){
    return (
        <div className="flex flex-col items-center p-6">
            <Image
                src="https://avatars.githubusercontent.com/u/84138510?v=4"
                alt="Picture of the user"
                width={100}
                height={100}
                className="rounded-full"
            />
            <p className="mt-4 font-semibold">Heron Rodrigues</p>
        </div>
    )
}
