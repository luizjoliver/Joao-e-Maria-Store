import Image from "next/image";



export default function PictureSection({pictureUrl}:{pictureUrl:string}) {
  return (
    <div className=" h-full w-full aspect-auto  relative ">
             <Image src={pictureUrl} alt="foto da categoria"  fill
             className="w-full "
             priority
             /> 
    </div>
  )
}
