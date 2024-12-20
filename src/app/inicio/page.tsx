import Menu from "@/components/Menu";
import Image from "next/image";


export default function Home() {
  return (
    <div className="h-full w-full">
      <Menu/>
      <section className="w-full h-[calc(100%-7rem)] flex items-start justify-center">
          <div className=" h-[80%] w-[65%] relative">
            <Image src={"/banner.jpg"} alt="" fill  />
          </div>
      </section>

      <section className="w-full h-[80%] flex items-start justify-center">
          <div className=" size-full ">
            Compre por categoria
          </div>
      </section>
    </div>
  );
}
