import { CardProp } from "@/app/types";
import Link from "next/link";



const CardBtn = ({text, href}: CardProp) => {
  return (
    <div className="card-actions justify-center mt-4">
    <Link href={href} className="btn bg-[#EEEEEE] hover:text-[#EEEEEE] outline-none border-0 text-base-100  dark:bg-[#088395]">{text}</Link>
    </div>
  )
}

export default CardBtn
   