"use client"

import EntranceComponent from "@/components/LoginRegisterPages/EntranceComponent";
import { useSessionStore } from "../store";
import { FormEvent } from "react";

export default function LoginPage() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string | null;
    const password = formData.get("password") as string | null;
  
    if (!email || !password) {
      window.alert("Preencha todos os campos!");
      return;
    }
  
    console.log({ email, password });
    useSessionStore.getState().logIn({ email, password });
  }

  return (
    <EntranceComponent 
      img="/loginImg.jpg" 
      mode="Login" 
      className="flex flex-col w-full gap-4 md:gap-6"
      onSubmit={(e) => handleSubmit(e)}
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-sm md:text-base">Email</label>
          <input 
            className="p-2 text-sm md:text-base outline-none ring-1 ring-gray-300 focus:ring-2 focus:ring-blue-500 rounded"
            id="email" 
            placeholder="Ex: Luiz@gmail.com"  
            name="email"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="password" className="text-sm md:text-base">Senha</label>
          <input 
            className="p-2 text-sm md:text-base outline-none ring-1 ring-gray-300 focus:ring-2 focus:ring-blue-500 rounded"
            id="password" 
            type="password" 
            name="password" 
          />
        </div>
      </div>

      <div className="flex items-center justify-center mt-4">
        <button 
          className="bg-blue-500 py-3 px-6 text-white hover:bg-blue-600 transition-colors w-full md:w-[70%] rounded-lg text-sm md:text-base"
          type="submit"
        >
          Entrar
        </button>
      </div>
    </EntranceComponent>
  )
}