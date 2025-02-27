
import CarouselSingleProduct from '@/components/CarouselSingleProduct';
import ProductNumerationsComponent from '@/components/SinglePrdocutPage/NumerationProduct';
import ProductButtons from '@/components/SinglePrdocutPage/ProductButtons';
import ProductColorsComponent from '@/components/SinglePrdocutPage/ProductColorsComponent';
import RecommendedProducts from '@/components/SinglePrdocutPage/RecomendadedProducts';
import { Products } from '@/constants';

type SearchParams = { [key: string]: string | string[] | undefined }
type Params = { id: string }

export default async function ProdutoPage({
  params,
  searchParams,
}: {
  params: Promise<Params>
  searchParams: Promise<SearchParams>
}) {

  const Params = await params;
  const SearchParams = await searchParams;

  const productId = parseInt(Params.id, 10);
  const product = Products[productId - 1];

  const selectedColor = SearchParams.color || product.img[0].colorImg;
  const selectedSize = SearchParams.size || String(product.sizes[0]);

  const selectedImg = SearchParams.imgIndex || '0'
  const getImageIndex = String(product.img[0].url.findIndex(imagePath => imagePath === selectedImg))

  const selectedIndex = getImageIndex !== '-1' ? getImageIndex : String(selectedImg)

  const productNumerations = product.sizes;
  const productColors = product.img.map((item) => item.colorImg);



  return (
    <div className=' w-full h-auto pt-28 flex gap-20 flex-col items-center justify-center '>

      <div className=' w-full md:h-[calc(100vh-112px)] h-[180vh]   flex flex-col  items-center py-4   justify-center '>


        <div className='  h-full w-full xl:w-[70%] lg:w-[90%] flex flex-col md:flex-row items-center justify-center gap-6 p-2 '>

          <CarouselSingleProduct productId={product.id} selectedColor={selectedColor} selectedSize={selectedSize} selectedImg={selectedImg} />

          <div className='h-full w-full md:w-[30%]  flex flex-col items-center justify-center  gap-6 '>

            <div className='w-full p-2 h-1/3 flex flex-col '>
              <h1 className='text-2xl font-semibold'>{product.name}</h1>
              <span className='text-opacity-70 text-black'>{product.category}</span>
              <span className='text-lg font-normal'>R$ {product.price}  no Pix</span>
              <span>ou</span>
              <span>R$ {product.price} em até 5x sem juros</span>

            </div>

            <div className='w-full h-1/2 flex flex-col gap-4  '>

              <div className='h-4/5 w-full '>
                <ProductNumerationsComponent numerations={productNumerations} selectedSize={selectedSize} selectedColor={selectedColor} selectedImgIndex={selectedIndex} />
              </div>

              <div className='h-1/5 w-full '>
                <ProductColorsComponent className='w-full h-full flex flex-col items-center justify-center gap-4' colors={productColors}
                  selectedSize={selectedSize} selectedColor={selectedColor} selectedImgIndex={selectedIndex} card
                />
              </div>

            </div>

            <ProductButtons product={product} selectedColor={selectedColor} selectedSize={selectedSize} />

          </div>
        </div>


      </div>

      <RecommendedProducts />

      {/* <Footer /> */}

    </div>
  )
}
