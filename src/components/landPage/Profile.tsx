import { useSessionStore } from '@/app/store'
import Link from 'next/link'
import React from 'react'
import { CgProfile } from 'react-icons/cg'
import { toast } from 'sonner'

type ProfileProps = {
    profileProps: {
        openProfileMenu: boolean
        handleClickOpenMenuProfile: () => void
    }
}


export default function Profile({ profileProps }: ProfileProps) {

    const session = useSessionStore((state) => state.session)
    
    function handleLogOut(){
       const logOut = useSessionStore.getState().logOut

       toast.success('Sessão encerrada',{
        style:{ backgroundColor: '#dc2626', color: 'white' }
      } )

       logOut()

    }
    return (
        <div className="relative z-0">
            {/* Ícone de Perfil */}
            <div className="rounded-full cursor-pointer" onClick={profileProps.handleClickOpenMenuProfile}>
                <CgProfile className="w-full min-w-5 min-h-10" />
            </div>

            {/* Menu Dropdown */}
            {profileProps.openProfileMenu && (

                session ? (
                    <div className="absolute left-1/2 -translate-x-1/2 top-12 bg-white shadow-lg p-4 rounded-md w-40">
                        <ul className="text-black text-sm  flex flex-col items-center justify-center gap-2">
                            <Link href={'/profile'} className="cursor-pointer hover:bg-gray-100 p-2 rounded-md w-full">Perfil</Link>
                            <button  className="cursor-pointer  hover:bg-gray-100 p-2 text-start rounded-md w-full" onClick={handleLogOut}>Sair</button>
                        </ul>
                    </div>
                )
                    :
                    (
                        <div className="absolute left-1/2 -translate-x-1/2 top-12 bg-white shadow-lg p-4 rounded-md w-40">

                            <ul className="text-black text-sm  flex flex-col items-center justify-center gap-2 ">
                                <Link href={'/login'} className="cursor-pointer hover:bg-gray-100 p-2 rounded-md w-full">Login</Link>
                                <Link href={'/register'} className="cursor-pointer hover:bg-gray-100 p-2 rounded-md w-full">Cadastrar</Link>
                            </ul>

                        </div>)
            )}
        </div>
    )
}
