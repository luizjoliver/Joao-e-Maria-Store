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
        <section className="pt-28 size-full bg-slate-50 flex items-center justify-center">
            <div className="w-[90%] h-[90%] xl:w-[70%] flex rounded-l-xl">
                <div className="h-full lg:w-1/2 w-full rounded-l-xl bg-white flex flex-col items-center justify-center gap-16">
                    <span className="text-2xl">{mode}</span>
                    <form onSubmit={onSubmit} {...rest}>
                        {children}
                    </form>
                </div>
                <div className="relative h-full w-1/2 rounded-r-xl hidden lg:block">
                    <Image src={img} alt="imagem de login" fill className="rounded-r-xl" />
                </div>
            </div>
        </section>
    );
}