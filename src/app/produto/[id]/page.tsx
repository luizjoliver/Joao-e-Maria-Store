import RecommendedProducts from '@/components/SinglePrdocutPage/RecommendedProducts';
import SingleProductSection from '@/components/SinglePrdocutPage/SingleProductSection';



export default async function ProdutoPage({
  params

}: {
  params: Promise<{ id: number }>

}) {

  const productId = (await params).id

 

  
  return (
    <div className=' w-full h-auto pt-28 flex gap-20 flex-col items-center justify-center '>

      <div className=' w-full md:h-[calc(100vh-112px)] h-[180vh]   flex flex-col  items-center py-4   justify-center '>

        
        <SingleProductSection productId={productId}/>
        

      </div>

    <RecommendedProducts/>

      {/* <Footer /> */}

    </div>
  )
}
