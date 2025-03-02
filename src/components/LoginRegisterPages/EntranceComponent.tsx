import Image from 'next/image'
import React, { FormEventHandler, ReactNode } from 'react'

type EntranceComponentProps = {
    children: ReactNode;
    mode: 'Login' | 'Cadastrar-se';
    img: string;
    onSubmit?: FormEventHandler<HTMLFormElement>;
} & React.HTMLAttributes<HTMLFormElement>; 

export default function EntranceComponent({ children, mode, img, onSubmit, ...rest }: EntranceComponentProps) {
    return (
        <section className="pt-28 min-h-screen bg-slate-50 flex items-center justify-center p-4">
            <div className="w-full max-w-[1200px] flex flex-col lg:flex-row rounded-xl shadow-lg">
                {/* Container do formulário - tamanho fixo */}
                <div className="w-full lg:w-[600px] min-h-[600px] bg-white flex flex-col items-center justify-center gap-8 p-8 rounded-t-xl lg:rounded-l-xl">
                    <h1 className="text-2xl font-bold">{mode}</h1>
                    <form onSubmit={onSubmit} {...rest} className="w-full max-w-[400px]">
                        {children}
                    </form>
                </div>

                {/* Container da imagem */}
                <div className="relative h-64 lg:h-auto lg:flex-1 rounded-b-xl lg:rounded-r-xl hidden lg:block">
                    <Image 
                        src={img} 
                        alt="imagem de login" 
                        fill 
                        className="rounded-b-xl lg:rounded-r-xl object-cover"
                        priority
                    />
                </div>
            </div>
        </section>
    );
}