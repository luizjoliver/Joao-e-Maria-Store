import React from 'react'

export default function RegisterForm() {
  return (
    <form className='space-y-4 w-full flex items-center justify-center gap-2 flex-col bg-red-300 lg:w-full'>
    <div className='bg-emerald-400 w-full sm:w-[60%] lg:w-full'>
      <label className='block text-gray-600 text-sm font-medium mb-1' htmlFor='name'>Nome</label>
      <input
        id='name'
        type='text'
        placeholder='Ex: Luiz Fellipe Joliver'
        className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none'
      />
    </div>

    <div className='bg-emerald-400 w-full sm:w-[60%] lg:w-full'>
      <label className='block text-gray-600 text-sm font-medium mb-1' htmlFor='email'>Email</label>
      <input
        id='email'
        type='email'
        placeholder='Ex: luiz@email.com'
        className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none'
      />
    </div>

    <div className='bg-emerald-400 w-full sm:w-[60%] lg:w-full'>
      <label className='block text-gray-600 text-sm font-medium mb-1' htmlFor='cpf'>CPF</label>
      <input
        id='cpf'
        type='text'
        placeholder='Ex: 057.381.931-82'
        className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none'
      />
    </div>
    <div className='bg-emerald-400 w-full sm:w-[60%] lg:w-full'>
      <label className='block text-gray-600 text-sm font-medium mb-1' htmlFor='cpf'>Senha</label>
      <input
        id='password'
        type='password'
        className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none'
      />
    </div>

    <div className='bg-emerald-400 w-full sm:w-[60%] lg:w-full'>
      <label className='block text-gray-600 text-sm font-medium mb-1' htmlFor='cpf'>Confirme a sua senha</label>
      <input
        id='passwordConfirm'
        type='password'
        className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none'
      />
    </div>
    
    <button
      type='submit'
      className='min-w-[35%] p-2 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all'
    >
      Confirmar
    </button>
  </form>
  )
}
