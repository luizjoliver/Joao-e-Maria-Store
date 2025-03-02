

import CarouselSection from "@/components/landPage/CarouselSection";
import PictureSection from "@/components/landPage/PictureSection";
import { CategoriesCards } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";



export default function Home() {
  return (
    <div className="h-full w-full ">

      <section className="  h-[calc(100%-15rem)]  md:h-[calc(100%-6rem)] flex flex-col w-full md:gap-10  items-center justify-center ">
        <div className="  h-[40%] w-full sm:h-full md:h-[70%]  md:w-[85%] lg:w-[70%] relative  ">
          <Image src={"/banner.jpg"} className="bg-bottom" alt="" fill quality={100} />

        </div>

        <div className="h-[30%] md:h-[20%] w-full  flex flex-col items-center justify-center   ">
          <Link href={"/ofertas"} className="p-4 bg-black rounded-full text-white ">Ver ofertas</Link>

        </div>

      </section>

      <section className="w-full min-h-dvh flex flex-col items-center justify-center py-20 bg-gray-50">
        <p className="text-3xl sm:text-4xl font-bold mb-10 lg:mb-20 text-center">
          Compre por categoria
        </p>
        <div className="w-full max-w-6xl px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {CategoriesCards.map((category) => (
              <Link
                href={`/ofertas`}
                key={category?.id}
                className="relative aspect-square overflow-hidden  hover:scale-105 transition-all duration-300"
              >
                <PictureSection pictureUrl={category!.pictureUrl} />
              </Link>
            ))}
          </div>
        </div>
      </section>



      <CarouselSection />


      <footer className="bg-black w-full py-10 text-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6 px-4">
          <div className="flex flex-col items-center gap-2 text-center md:items-start md:text-left">
            <h2 className="text-lg font-semibold">Siga-nos</h2>
            <div className="flex space-x-4 mt-2">
              <Link href={"https://www.instagram.com/_joaoemariastore/"} target="_blank">
                <FaInstagram className="text-2xl" />
              </Link>
              <Link href={"https://api.whatsapp.com/send/?phone=61984243436&text=Ol%C3%A1%20jo%C3%A3o%20e%20maria%20store%20!&type=phone_number&app_absent=0&source_url=UrlJoaoEMaria&context=UrlJoaoEMaria&icebreaker=Ol%C3%A1%20jo%C3%A3o%20e%20maria%20store%20!"}
                target="_blank">
                <FaWhatsapp className="text-2xl" />
              </Link>
              <Link href={"https://www.instagram.com/_joaoemariastore/"} target="_blank">
                <FaFacebook className="text-2xl" />
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-center gap-2 text-center md:items-start md:text-left">
            <h2 className="text-lg font-semibold">Central de Vendas</h2>
            <p className="text-sm">(61) 99999-9999</p>
            <p className="text-sm">Segunda a Sexta: 9h às 18h</p>
          </div>

          {/* 
    <div className="flex flex-col items-center gap-2 text-center md:items-start md:text-left">
      <h2 className="text-lg font-semibold">Formas de Pagamento</h2>
      <div className="flex space-x-4 mt-2">
        <img src="/icons/visa.png" alt="Visa" className="w-10 h-10" />
        <img src="/icons/mastercard.png" alt="Mastercard" className="w-10 h-10" />
        <img src="/icons/pix.png" alt="Pix" className="w-10 h-10" />
        <img src="/icons/amex.png" alt="Amex" className="w-10 h-10" />
      </div>
    </div> 
    */}
        </div>

        <div className="mt-6 text-center text-sm text-gray-400">
          © 2024 JoãoMariaSotre. Todos os direitos reservados.
        </div>
      </footer>

    </div>
  );
}
