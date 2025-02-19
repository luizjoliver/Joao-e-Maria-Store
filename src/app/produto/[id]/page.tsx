
import RecommendedProducts from '@/components/SinglePrdocutPage/RecomendadedProducts';
import SingleProductSection from '@/components/SinglePrdocutPage/SingleProductSection';
import { Products } from '@/constants';


export default async function ProdutoPage({
  params

}: {
  params: Promise<{ id: number }>

}) {

  const productId = (await params).id
  const product = Products[productId - 1]
 
  console.log(productId);
  

  
  return (
    <div className=' w-full h-auto pt-28 flex gap-20 flex-col items-center justify-center '>

      <div className=' w-full md:h-[calc(100vh-112px)] h-[180vh]   flex flex-col  items-center py-4   justify-center '>

        
        <SingleProductSection  product={product}/>
        

      </div>

    <RecommendedProducts/>

      {/* <Footer /> */}

    </div>
  )
}
