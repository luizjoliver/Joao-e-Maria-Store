import Image from "next/image";
import Link from "next/link";


export default function Card({categoryName,pictureUrl}:{categoryName:string,pictureUrl:string}) {
  return (
    <div className="w-full h-full  relative">
         <Link href={`/${categoryName}`}>
             <Image src={pictureUrl} alt="foto da categoria"  fill/> 
         </Link>
       
    </div>
  )
}
