import Image from "next/image";



export default function Card({pictureUrl}:{pictureUrl:string}) {
  return (
    <div className="w-full h-full relative">
        
             <Image src={pictureUrl} alt="foto da categoria"  fill/> 
         
       
    </div>
  )
}
