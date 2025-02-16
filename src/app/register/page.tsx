import EntranceComponent from "@/components/LoginRegisterPages/EntranceComponent";

export default function RegisterPage() {
  //Nome , cidade , telefone ,endereço , data de nascimento , cpf ou npj , email , senha , confirmar senha

  return (
    <>
      <EntranceComponent img="/registerImg.jpg" mode="Cadastrar-se" className="flex flex-col w-[90%] gap-4  " >


        <div className="grid grid-cols-2  gap-8">

          <div className=" flex flex-col gap-4">
            <div className="flex flex-col gap-1 ">
              <label htmlFor="name">Nome</label>
              <input className="p-2 outline-none ring-black ring-1 focus:ring-blue-500 focus:ring-2" id="name" placeholder="Ex: Luiz"  />
            </div>
            <div className="flex flex-col gap-1 ">
              <label htmlFor="email">Email</label>
              <input className="p-2 outline-none ring-black ring-1 focus:ring-blue-500 focus:ring-2" id="email" type="Email" placeholder="Ex: Luiz@gmail.com" />
            </div>
            <div className="flex flex-col gap-1 ">
              <label htmlFor="birthDate">Data de nascimento </label>
              <input className="p-2 outline-none ring-black ring-1 focus:ring-blue-500 focus:ring-2" id="birthDate" type="date" placeholder="Ex: CSB 10 ..." />
            </div>
     
          </div>

          <div className=" flex flex-col gap-4">
  
            <div className="flex flex-col gap-1 ">
              <label htmlFor="cpf">CPF ou CNPJ</label>
              <input className="p-2 outline-none ring-black ring-1 focus:ring-blue-500 focus:ring-2" type="cpf" placeholder="Ex: 0597945672" />
            </div>

            <div className="flex flex-col gap-1 ">
              <label htmlFor="password">Senha</label>
              <input className="p-2 outline-none ring-black ring-1 focus:ring-blue-500 focus:ring-2" type="password" id="password"/>
            </div>

            <div className="flex flex-col gap-1 ">
              <label htmlFor="passwordConfirm">Confirmar Senha</label>
              <input className="p-2 outline-none ring-black ring-1 focus:ring-blue-500 focus:ring-2" type="password" id="passwordConfirm"/>
            </div>
          
          </div>

        </div>

        <div className="flex items-center justify-center ">
          <button className="bg-blue-500 py-2 px-1 text-white hover:text-opacity-75 w-[70%] rounded-lg ">Cadastar</button>
        </div>

        <div>

        </div>

      </EntranceComponent>
    </>
  )

}
