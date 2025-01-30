import Card from "@/components/Card";
import { CategoriesCards } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";




export default function Home() {
  return (
    <div className="h-full w-full ">
    
      <section className="  h-[calc(100%-15rem)]  md:h-[calc(100%-6rem)] flex flex-col w-full md:gap-10  items-center justify-center ">
        <div className="  h-[40%] w-full sm:h-full md:h-[70%]  md:w-[85%] lg:w-[70%] relative  ">
          <Image src={"/banner.jpg"} className="bg-bottom" alt="" fill quality={100}/>

        </div>

        <div className="h-[30%] md:h-[20%] w-full  flex flex-col items-center justify-center   ">
          <Link href={"/ofertas"} className="p-4 bg-black rounded-full text-white ">Ver ofertas</Link>

        </div>

      </section>

      <section className="  w-full h-[220vh] md:h-[250vh] lg:h-[90%] flex flex-col items-center justify-around py-24 ">
        <p className=" text-xl sm:text-4xl mb-10 lg:mb-20">Compre por categoria</p>
        <div className="  h-[95%] w-[40%] md:h-full md:w-[70%]  lg:w-[60%] flex flex-col gap-10 ">
          <div className="  w-full h-full  grid  gap-4 lg:grid-cols-4  lg:grid-rows-2
    md:grid-rows-4 md:grid-cols-2 ">
            {CategoriesCards.map((category) => (
              <Link href={`${category?.categoryName}`} key={category?.id} className="hover:scale-105 w-full h-full">
                <Card  pictureUrl={category!.pictureUrl} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-black w-full py-10 text-white">

        <div className="flex flex-col items-center gap-2 text-center">
          <h2 className="text-lg font-semibold">Siga-nos</h2>
          <div className="flex space-x-4">
            <Link href={""}>
              <FaInstagram />
            </Link>
            <Link href={""}>
              <FaWhatsapp />
            </Link>
            <Link href={""}>
              <FaFacebook />
            </Link>
          </div>
        </div>

        <div className="container mx-auto flex flex-wrap justify-around">

          <div className="flex flex-col items-center gap-2 text-center">
            <h2 className="text-lg font-semibold">Central de Vendas</h2>
            <p className="text-sm">(61) 99999-9999</p>
            <p className="text-sm">Segunda a Sexta: 9h às 18h</p>
          </div>


          <div className="flex flex-col items-center gap-2 text-center">
            <h2 className="text-lg font-semibold">Formas de Pagamento</h2>
            <div className="flex space-x-4">
              <img src="/icons/visa.png" alt="Visa" className="w-10 h-10" />
              <img src="/icons/mastercard.png" alt="Mastercard" className="w-10 h-10" />
              <img src="/icons/pix.png" alt="Pix" className="w-10 h-10" />
              <img src="/icons/amex.png" alt="Amex" className="w-10 h-10" />
            </div>
          </div>
        </div>
        <div className="mt-6 text-center text-sm text-gray-400">
          © 2024 JoãoMariaSotre. Todos os direitos reservados.
        </div>
      </footer>

    </div>
  );
}
