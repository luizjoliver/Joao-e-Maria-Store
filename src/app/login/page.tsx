import EntranceComponent from "@/components/LoginRegisterPages/EntranceComponent";


export default function LoginPage() {
  //Login e senha
  return (
    <>
      <EntranceComponent img="/loginImg.jpg" mode="Login" className="flex flex-col w-[60%] md:w-[40%] lg:w-1/2  gap-8 "  >

        <div className="flex flex-col gap-2 ">
          <label htmlFor="email">Email</label>
          <input id="email" placeholder="Ex:Luiz@gmail.com" className="p-2 outline-none ring-black ring-1 focus:ring-blue-500 focus:ring-2" />
        </div>

        <div className="flex flex-col ">
          <label htmlFor="password">Senha</label>
          <input id="password" type="password" className="p-2 outline-none ring-black ring-1 focus:ring-blue-500 focus:ring-2" />
        </div>


        <div className="flex items-center justify-center ">
          <button className="bg-blue-500 py-2 px-1 text-white hover:text-opacity-75 w-[70%] rounded-lg ">Entrar</button>
        </div>

        <div>

        </div>

      </EntranceComponent>
    </>
  )
}
