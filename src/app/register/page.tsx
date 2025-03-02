import EntranceComponent from "@/components/LoginRegisterPages/EntranceComponent";

export default function RegisterPage() {
  return (
    <EntranceComponent 
      img="/registerImg.jpg" 
      mode="Cadastrar-se" 
      className="flex flex-col w-full gap-4 md:gap-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        {/* Coluna Esquerda */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-sm md:text-base">Nome</label>
            <input 
              className="p-2 text-sm md:text-base outline-none ring-1 ring-gray-300 focus:ring-2 focus:ring-blue-500 rounded"
              id="name" 
              placeholder="Ex: Luiz"  
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-sm md:text-base">Email</label>
            <input 
              className="p-2 text-sm md:text-base outline-none ring-1 ring-gray-300 focus:ring-2 focus:ring-blue-500 rounded"
              id="email" 
              type="email" 
              placeholder="Ex: Luiz@gmail.com" 
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="birthDate" className="text-sm md:text-base">Data de nascimento</label>
            <input 
              className="p-2 text-sm md:text-base outline-none ring-1 ring-gray-300 focus:ring-2 focus:ring-blue-500 rounded"
              id="birthDate" 
              type="date" 
            />
          </div>
        </div>

        {/* Coluna Direita */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="cpf" className="text-sm md:text-base">CPF ou CNPJ</label>
            <input 
              className="p-2 text-sm md:text-base outline-none ring-1 ring-gray-300 focus:ring-2 focus:ring-blue-500 rounded"
              type="text" 
              id="cpf" 
              placeholder="Ex: 0597945672" 
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="text-sm md:text-base">Criar Senha</label>
            <input 
              className="p-2 text-sm md:text-base outline-none ring-1 ring-gray-300 focus:ring-2 focus:ring-blue-500 rounded"
              type="password" 
              id="password"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="passwordConfirm" className="text-sm md:text-base">Confirmar Senha</label>
            <input 
              className="p-2 text-sm md:text-base outline-none ring-1 ring-gray-300 focus:ring-2 focus:ring-blue-500 rounded"
              type="password" 
              id="passwordConfirm"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center mt-4">
        <button className="bg-blue-500 py-3 px-6 text-white hover:bg-blue-600 transition-colors w-full md:w-[70%] rounded-lg text-sm md:text-base">
          Cadastrar
        </button>
      </div>
    </EntranceComponent>
  )
}