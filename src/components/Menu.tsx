import Link from "next/link";
import { TiSocialInstagram } from "react-icons/ti";

export default function Menu() {
  return (
    <div className="w-full h-28  flex justify-center">
       <div className="bg-amber-900 w-[12%] flex items-center justify-center">
        <p>Logo</p>
       </div>
        <nav className="bg-blue-300 w-full flex items-center justify-start">
            <ul className="w-[90%] h-full bg-yellow-300 flex items-center justify-around">
                <Link href={``}>Roupas</Link>
                <Link href={``}>Calçados</Link>
                <Link href={``}>Acessórios</Link>
                <Link href={``} >Beleza</Link>
            </ul>
            <div className=" w-[10%] h-full flex items-center justify-center">
                <Link href={""} target="_blank" >
                   <TiSocialInstagram size={70}/>
                </Link>
            </div>
        </nav>
    </div>
  )
}
