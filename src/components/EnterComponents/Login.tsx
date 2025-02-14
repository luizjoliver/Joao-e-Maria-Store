import React from 'react'

export default function LoginForm() {
  return (
    <form className='space-y-4'>
    <div>
      <label className='block text-gray-600 text-sm font-medium mb-1' htmlFor='name'>Nome</label>
      <input
        id='name'
        type='text'
        placeholder='Ex: Luiz Fellipe Joliver'
        className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none'
      />
    </div>

    <div>
      <label className='block text-gray-600 text-sm font-medium mb-1' htmlFor='email'>Email</label>
      <input
        id='email'
        type='email'
        placeholder='Ex: luiz@email.com'
        className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none'
      />
    </div>

    <div>
      <label className='block text-gray-600 text-sm font-medium mb-1' htmlFor='cpf'>CPF</label>
      <input
        id='cpf'
        type='text'
        placeholder='Ex: 057.381.931-82'
        className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none'
      />
    </div>
    
    <button
      type='submit'
      className='w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all'
    >
      Confirmar
    </button>
  </form>
  )
}
