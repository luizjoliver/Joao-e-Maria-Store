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
      <div className="flex flex-col sm:flex-row gap-6   fixed bottom-0 right-0 p-6 z-20">
        <Link href={"https://www.instagram.com/_joaoemariastore/"} target="_blank" className="">
          <Image alt="instagram logo" src={"/instagram.svg"} width={30} height={30} quality={75} />
        </Link>
        <Link
          href={"https://api.whatsapp.com/send/?phone=61984243436&text=Ol%C3%A1%20jo%C3%A3o%20e%20maria%20store%20!&type=phone_number&app_absent=0&source_url=UrlJoaoEMaria&context=UrlJoaoEMaria&icebreaker=Ol%C3%A1%20jo%C3%A3o%20e%20maria%20store%20!"} target="_blank"

        >
          <SiWhatsapp size={30} color="#25D366" />
        </Link>
      </div>
    </>
  )
}