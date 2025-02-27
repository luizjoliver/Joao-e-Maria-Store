import { categoriesMenu } from "@/constants"
import Link from "next/link"
import { useState } from "react"
import { createPortal } from "react-dom"
import { IoMdClose } from "react-icons/io"

type MenuModalProps = {
  setIsMenuOpen: (value: boolean) => void;
}

export default function MenuModal({ setIsMenuOpen }: MenuModalProps) {
  const [currentCategory, setCurrentCategory] = useState('')
  const [currentSubCategory, setCurrentSubCategory] = useState<number | null>(null)

  const isLoggedIn = false // Simular autenticação
  const userName = "João" // Simular nome do usuário

  function onClickCloseMenuModal() {
    setIsMenuOpen(false)
  }

  function onClickCurrentCategory(categoryTitle: string) {
    setCurrentCategory((prev) => prev === categoryTitle ? '' : categoryTitle)
    setCurrentSubCategory(null)
  }

  function onClickCurrentSubCategory(subCategoryId: number) {
    setCurrentSubCategory((prev) => prev === subCategoryId ? null : subCategoryId)
  }

  return createPortal(
    <div className="fixed inset-0 z-50">
      <div 
        className="absolute inset-0 bg-black/50 " 
        onClick={onClickCloseMenuModal}
        role="button"
        aria-label="Fechar menu"
      />

      <aside className="relative w-[60%] sm:w-[45%] h-full bg-gradient-to-r from-amber-800 to-amber-700 shadow-xl">
        {/* Botão de Fechar */}
        <button 
          onClick={onClickCloseMenuModal}
          className="absolute top-0 right-1 sm:top-1 sm:right-4 text-white hover:text-amber-200 transition-colors"
          aria-label="Fechar menu"
        >
          <IoMdClose size={24} />
        </button>

        {/* Seção de Status do Usuário */}
        <div className="flex flex-col items-center py-6 bg-amber-900 text-white">
          {isLoggedIn ? (
            <>
              <div className="w-16 h-16 bg-white rounded-full mb-2"></div> {/* Placeholder para Avatar */}
              <p className="text-lg font-semibold">{userName}</p>
              <div className="flex gap-4 mt-2">
                <Link href="/perfil" className="text-sm hover:underline">Perfil</Link>
                <button className="text-sm hover:underline">Sair</button>
              </div>
            </>
          ) : (
            <div className="flex gap-4 sm:justify-around sm:w-full">
              <Link href="/login" className="text-sm hover:underline" onClick={onClickCloseMenuModal}>Entrar</Link>
              <Link href="/register" className="text-sm hover:underline" onClick={onClickCloseMenuModal}>Cadastrar</Link>
            </div>
          )}
        </div>

        {/* Navegação do Menu */}
        <nav className="pt-6 p-4 overflow-y-auto h-full">
          {categoriesMenu.map((category) => (
            <div key={category.title} className="mb-4">
              <button
                onClick={() => onClickCurrentCategory(category.title)}
                className="w-full text-left p-2 text-slate-200 hover:bg-amber-900 rounded transition-colors"
                aria-expanded={currentCategory === category.title}
              >
                {category.title}
              </button>

              {currentCategory === category.title && (
                <ul className="ml-4 mt-2">
                  {category.subcategories.map((sub) => (
                    <li key={sub.id} className="mb-2">
                      <button
                        onClick={() => onClickCurrentSubCategory(sub.id)}
                        className="pl-2 w-full text-left p-1 text-white font-semibold hover:bg-amber-900 rounded hover:font-normal hover:text-opacity-80 transition-colors"
                        aria-expanded={currentSubCategory === sub.id}
                      >
                        {sub.subtitle}
                      </button>

                      {currentSubCategory === sub.id && (
                        <ul className="ml-4">
                          {sub.items.map((item) => (
                            <li key={item.link} className="py-1">
                              <Link
                                href={item.link}
                                onClick={onClickCloseMenuModal}
                                className="text-sm text-white font-semibold block transition-colors"
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </nav>
      </aside>
    </div>,
    document.body
  )
}
