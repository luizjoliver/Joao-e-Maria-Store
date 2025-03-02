"use client"

import React, { useState } from 'react'
import { useSessionStore } from '../store'
import { CgProfile } from 'react-icons/cg'
import { FaEye } from 'react-icons/fa'

export default function ProfilePage() {

  const [visiblePassword, setVisiblePassword] = useState(false)
  
  const session = useSessionStore((state) => state.session)
  const userEmail = useSessionStore((state) => state.user?.email)
  const userName = useSessionStore((state) => state.user?.email)?.split('@')[0]
  const password = useSessionStore((state) => state.user?.password)

  return (
    session ? (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-12">
        <div className="bg-white shadow-lg rounded-lg w-[380px] p-8 flex flex-col space-y-6">
          
          {/* Profile Header */}
          <div className="flex flex-col items-center space-y-4">
            <CgProfile className="text-6xl text-gray-600" />
            <span className="text-xl font-semibold text-gray-700">{userName}</span>
          </div>

          {/* User Info */}
          <div className="flex flex-col space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-600">Email:</label>
              <input 
                type="text" 
                value={userEmail} 
                disabled 
                className="w-full mt-1 px-4 py-2 bg-gray-100 border border-gray-300 rounded-md text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600">Password:</label>
              <div className="flex items-center space-x-2">
                <input 
                  type={visiblePassword ? 'text' : 'password'} 
                  value={password} 
                  disabled 
                  className="w-full mt-1 px-4 py-2 bg-gray-100 border border-gray-300 rounded-md text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <FaEye 
                  onClick={() => setVisiblePassword(!visiblePassword)} 
                  className="text-gray-500 cursor-pointer hover:text-gray-700"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    ) : (
      <div className="min-h-screen flex items-center justify-center text-xl text-gray-600">
        Usuário não efetuou o Login
      </div>
    )
  )
}