import Image from "next/image";



export default function PictureSection({pictureUrl}:{pictureUrl:string}) {
  return (
    <div className=" w-full sm:w-[80%]  aspect-auto h-full relative ">
             <Image src={pictureUrl} alt="foto da categoria"  fill
             className="object-contain w-full"
             /> 
    </div>
  )
}
