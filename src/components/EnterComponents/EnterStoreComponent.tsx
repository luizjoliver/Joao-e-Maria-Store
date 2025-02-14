import Image from 'next/image';
import React from 'react'
import LoginForm from './Login';
import RegisterForm from './Register';

type EnterStoreComponent = {
  mode: 'Login' | 'Registrar-se'
  img: string;
}


export default function EnterStoreComponent({ img, mode }: EnterStoreComponent) {
  return  (
    <main className='pt-28 flex items-center justify-center min-h-screen bg-gray-100'>
      <section className='bg-white shadow-lg rounded-xl flex overflow-hidden w-[90%] max-w-4xl'>
        
        {/* Formulário */}
        <div className=' flex flex-col justify-center w-full lg:w-1/2  p-8'>
          <h2 className='text-3xl font-semibold text-gray-700 text-center mb-6'>{mode}</h2>
          {mode === 'Registrar-se' ?

            <RegisterForm/>
            :
            <LoginForm/>
          }
        </div>
        
        {/* Imagem */}
        <div className='relative w-1/2 h-auto lg:block hidden'>
          <Image className='object-cover' src={img} alt='Imagem boas-vindas ao JM Store' layout='fill' />
        </div>
      </section>
    </main>
  );
}
