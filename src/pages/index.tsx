import { Avatar } from "@/components/Avatar"
import { LinkButton } from "@/components/LinkButton"
import { Social } from "@/components/Social"

export default function Home() {
  return (
    <div className="flex flex-col h-screen items-center  pb-12 bg-black">
      <Avatar/>
      <LinkButton name="Instagram"/>
      <LinkButton name="Linkedin"/>
      <LinkButton name="Github"/>
      <Social/>
      <p className="relative mt-4">Developed by Heron</p>
    </div>
  )
}
