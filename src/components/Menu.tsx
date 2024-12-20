import Link from "next/link";


export default function Menu() {
  return (
    <div className="w-full h-28 bg-gradient-to-r from-amber-900 to-amber-700 flex justify-center">
       <div className=" w-[12%] flex items-center justify-center">
        <span className="text-5xl text-white font-thin">J M</span>
       </div>
        <nav className="w-full flex items-center justify-start">
            <ul className="w-[190%] h-full  flex items-center justify-around text-white font-thin">
                <Link href={``}>Roupas</Link>
                <Link href={``}>Calçados</Link>
                <Link href={``}>Acessórios</Link>
                <Link href={``} >Beleza</Link>
            </ul>
        </nav>
    </div>
  )
}
