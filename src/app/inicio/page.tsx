import Card from "@/components/Card";
import Menu from "@/components/Menu";
import { CategoriesCards, CategoriesCards2 } from "@/contants";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";




export default function Home() {
  return (
    <div className="h-full w-full">
      <Menu/>
      <section className="w-full h-[calc(100%-7rem)] flex flex-col items-center justify-center ">
          <div className=" h-[80%] w-[65%] relative ">
            <Image src={"/banner.jpg"} alt="" fill  />
           
          </div>
          <div className="h-[20%] w-[65%] flex items-center justify-center ">
              <Link href={"/ofertas"} className="p-4 bg-black rounded-full text-white">Ver ofertas</Link>
          </div>
      </section>

      <section className="w-full h-[90%] flex items-start justify-center pb-24">
          <div className="h-full w-[65%] 0 flex flex-col gap-10">
            <p className="text-4xl">Compre por Categoria</p>

            <div className=" w-full h-full flex flex-col  gap-6  ">
                <div className="w-full h-[50%] flex gap-4 wrap">
                  {CategoriesCards.map((category) =>(
                    <Card key={category.categoryName} pictureUrl={category.pictureUrl} categoryName={category.categoryName}/>
                  ))}
                </div>

                <div className="w-full h-[50%] flex gap-4 wrap ">
                  {CategoriesCards2.map((category) =>(
                    <Card key={category.categoryName} pictureUrl={category.pictureUrl} categoryName={category.categoryName}/>
                  ))}
                </div>


            </div>
          </div>
         
      </section>

      <footer className="bg-black w-full py-10 text-white">
 



   
    <div className="flex flex-col items-center gap-2 text-center">
      <h2 className="text-lg font-semibold">Siga-nos</h2>
      <div className="flex space-x-4">
       <Link href={""}>
        <FaInstagram/>
       </Link>
       <Link href={""}>
        <FaWhatsapp/>
       </Link>
       <Link href={""}>
        <FaFacebook/>
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
