import { categoriesMenu } from "@/constants"
import Link from "next/link"
import { useState } from "react"
import { createPortal } from "react-dom"
import { IoMdClose } from "react-icons/io"

type MenuModalProps = {
    setIsMenuOpen : (value:boolean) => void;
}

export default function MenuModal  ({setIsMenuOpen} :MenuModalProps) {

    const [currentCategory, setCurrentCategory] = useState('')
    const [currentSubCategory, setCurrentSubCategory] = useState<number | null>(null)
  
    function onClickCloseMenuModal (){
      setIsMenuOpen(false)
    }

    function onClickCurrentCategory (categoryTitle:string){
  
        setCurrentCategory((prev) => prev === categoryTitle ? '' : categoryTitle)
        setCurrentSubCategory(null)
    }
  
  function onClickCurrentSubCategory (subCategoryId :number) {

        setCurrentSubCategory((prev) => prev === subCategoryId ? null : subCategoryId  )
        
  }
   //Arrumar dependencias , usar callBack, evitar muitas renderizações no futuro!
    
    // useEffect(() => {
    //   const handleKeyDown = (e: KeyboardEvent) => {
    //     if (e.key === 'Escape') onClickCloseMenuModal()
    //   }

    //   console.log('renderizou!');
      
  
    //   window.addEventListener('keydown', handleKeyDown)
    //   return () => window.removeEventListener('keydown', handleKeyDown)
    // }, [onClickCloseMenuModal])
  
    return createPortal(
      <div className="fixed inset-0 z-50">
       
        <div 
          className="absolute inset-0 bg-black/50" 
          onClick={onClickCloseMenuModal}
          role="button"
          aria-label="Fechar menu"
        />
        
       
        <aside 
          className="relative w-[40%] h-full bg-gradient-to-r from-amber-800 to-amber-700 shadow-xl"
          
        >
          <button 
            onClick={onClickCloseMenuModal}
            className="absolute top-4 right-4 text-white hover:text-amber-200 transition-colors"
            aria-label="Fechar menu"
          >
            <IoMdClose size={24} />
          </button>
  
          <nav className="pt-16 p-4 overflow-y-auto h-full">
            {categoriesMenu.map((category) => (
              <div key={category.title} className="mb-4">
                <button
                  onClick={() =>onClickCurrentCategory(category.title)}
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
                          onClick={() =>onClickCurrentSubCategory(sub.id)}
                          className="pl-2 w-full text-left p-1 text-white font-semibold  hover:bg-amber-900 rounded hover:font-normal hover:text-opacity-80 transition-colors"
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
  