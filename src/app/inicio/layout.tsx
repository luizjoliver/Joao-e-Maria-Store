import Image from "next/image"
import Link from "next/link"
import { SiWhatsapp } from "react-icons/si"

export default function HomeLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <>
         
          {children}
          <div className="flex gap-6   fixed bottom-0 right-0 p-6">
          <Link href={""} target="_blank" className="">
                     <Image alt="instagram logo" src={"instagram.svg"} width={30} height={30} quality={75}  />
          </Link>
          <Link href={""} target="_blank" >
                     <SiWhatsapp size={30} color="#25D366" />
          </Link>
        </div>
        </>
    )
  }