import Link from 'next/link';
import React from 'react'

type ProductColorsComponentType = {
  card: boolean;
  colors: string[]
  selectedColor?:string | undefined | string[]
  selectedSize?:string[] | string | undefined
  selectedImgIndex?:string | undefined | string[]
} & React.HTMLAttributes<HTMLDivElement>



export const colorMap: Record<string, string> = {
  black: "bg-black",
  white: "bg-white border border-gray-300", // Borda para visibilidade
  red: "bg-red-500",
  blue: "bg-blue-200",
  amber: "bg-amber-800",
  slate: "bg-slate-500",
  green: "bg-green-500",
  yellow: "bg-yellow-500",
  gray: "bg-gray-500",
  pink: "bg-pink-500"
};

export default function ProductColorsComponent({ card, colors,selectedSize,selectedColor, selectedImgIndex, ...rest }: ProductColorsComponentType) {
  return (
    <article
      {...rest}
    >
      <span className={`${card === false || !colors ? 'hidden' : 'block'} `}>Escolha a cor</span>


      {
        card === false ? (

          <div className="w-full h-full flex items-center justify-center gap-2">
            {colors?.map((color) => (
              <span   key={color} className={`${colorMap[color] }  size-4 rounded-full`}
              ></span>
            ))}
          </div>
 
        )
          : (



            <div className="w-full h-full flex items-center justify-center gap-2">
              {colors?.map((color) => (
                <Link href={`?imgIndex=${selectedImgIndex}&color=${color}&size=${selectedSize}`} key={color} className={`${colorMap[color] } ${selectedColor === color && 'ring-1 ring-blue-500'} size-4 rounded-full cursor-pointer hover:ring-1 hover:ring-blue-500`}
                ></Link>
              ))}
            </div>
          )
      }
    </article>
  )
}
