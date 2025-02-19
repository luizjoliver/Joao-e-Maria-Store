import React from 'react'

type ProductColorsComponentType = {
  card: boolean;
  colors?: string[]
} & React.HTMLAttributes<HTMLDivElement>

const colorMap: Record<string, string> = {
  black: "bg-black",
  white: "bg-white border border-gray-300", // Borda para visibilidade
  red: "bg-red-500",
  blue: "bg-blue-500",
  amber: "bg-amber-800",
  slate: "bg-slate-500",
  green: "bg-green-500",
  yellow: "bg-yellow-500",
  gray: "bg-gray-500"
};

export default function ProductColorsComponent({ card, colors, ...rest }: ProductColorsComponentType) {
  return (
    <article
      {...rest}
    >
      <span className={`${card === false ? 'hidden' : 'block'} `}>Escolha a cor</span>


      {
        card === false ? (

          <div className="w-full h-full flex items-center justify-center gap-2">
            {colors?.map((color) => (
              <span key={color} className={`${colorMap[color] || "bg-gray-500"} size-4 rounded-full`}></span>
            ))}
          </div>

        )
          : (



            <div className="w-full h-full flex items-center justify-center gap-2">
              {colors?.map((color) => (
                <span key={color} className={`${colorMap[color] || "bg-gray-500"} size-4 rounded-full cursor-pointer hover:ring-1 hover:ring-blue-500`}></span>
              ))}
            </div>
          )
      }
    </article>
  )
}
