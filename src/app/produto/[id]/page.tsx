import CarouselSingleProduct from '@/components/CarouselSingleProduct'
import Footer from '@/components/landPage/Footer'
import Image from 'next/image';
import { CiHeart } from 'react-icons/ci';


export default async function ProdutoPage({
  params

}: {
  params: Promise<{ id: number }>

}) {

  const id = (await params).id

  return (
    <div className=' w-full h-auto pt-28 flex flex-col items-center justify-center'>

      <div className=' w-full h-[calc(100vh-112px)] flex items-center py-4 justify-center '>

        <div className='  h-full xl:w-[70%] lg:w-[90%] flex gap-6'>

          <CarouselSingleProduct productId={id} />

          <div className='h-full w-[30%]  flex flex-col gap-2'>
            <div className='w-full p-2 h-auto flex flex-col'>
              <h1 className='text-2xl font-semibold'>Tênis Nike Air Max SYSTM Masculino</h1>
              <span className='text-opacity-70 text-black'>Casual</span>
              <span className='text-lg font-normal'>R$ 439,99  no Pix</span>
              <span>ou</span>
              <span>R$ 439,99 em até 5x sem juros</span>

            </div>

            <div className='w-full h-1/2  '>

              <article className='flex flex-col items-center justify-center gap-2  '>
                <h3>Escolha o seu tamanho</h3>
                <div className='w-full flex items-center justify-center gap-4 p'>
                  <div className='bg-[#F7F7F7] rounded-md min-h-14 w-1/4 flex items-center justify-center  hover:ring-1 hover:ring-black cursor-pointer'><span>35</span></div>
                  <div className='bg-[#F7F7F7] rounded-md min-h-14 w-1/4 flex items-center justify-center  hover:ring-1 hover:ring-black cursor-pointer'><span>36</span></div>
                  <div className='bg-[#F7F7F7] rounded-md min-h-14 w-1/4 flex items-center justify-center  hover:ring-1 hover:ring-black cursor-pointer'><span>37</span></div>
                  <div className='bg-[#F7F7F7] rounded-md min-h-14 w-1/4 flex items-center justify-center  hover:ring-1 hover:ring-black cursor-pointer'><span>37,5</span></div>
                </div>
                <div className='w-full flex items-center justify-center gap-4 p'>
                  <div className='bg-[#F7F7F7] rounded-md min-h-14 w-1/4 flex items-center justify-center  hover:ring-1 hover:ring-black cursor-pointer'><span>38</span></div>
                  <div className='bg-[#F7F7F7] rounded-md min-h-14 w-1/4 flex items-center justify-center  hover:ring-1 hover:ring-black cursor-pointer'><span>39</span></div>
                  <div className='bg-[#F7F7F7] rounded-md min-h-14 w-1/4 flex items-center justify-center  hover:ring-1 hover:ring-black cursor-pointer'><span>40,5</span></div>
                  <div className='bg-[#F7F7F7] rounded-md min-h-14 w-1/4 flex items-center justify-center  hover:ring-1 hover:ring-black cursor-pointer'><span>40</span></div>
                </div>
                <div className='w-full flex items-center justify-center gap-4 p'>
                  <div className='bg-[#F7F7F7] rounded-md min-h-14 w-1/4 flex items-center justify-center  hover:ring-1 hover:ring-black cursor-pointer'><span>41</span></div>
                  <div className='bg-[#F7F7F7] rounded-md min-h-14 w-1/4 flex items-center justify-center  hover:ring-1 hover:ring-black cursor-pointer'><span>42</span></div>
                  <div className='bg-[#F7F7F7] rounded-md min-h-14 w-1/4 flex items-center justify-center  hover:ring-1 hover:ring-black cursor-pointer'><span>42,5</span></div>
                  <div className='bg-[#F7F7F7] rounded-md min-h-14 w-1/4 flex items-center justify-center  hover:ring-1 hover:ring-black cursor-pointer'><span>43</span></div>
                </div>
                <div className='w-full flex items-center justify-center gap-4 p'>
                  <div className='bg-[#F7F7F7] rounded-md min-h-14 w-1/4 flex items-center justify-center  hover:ring-1 hover:ring-black cursor-pointer'><span>44</span></div>
                  <div className='bg-[#F7F7F7] rounded-md min-h-14 w-1/4 flex items-center justify-center  hover:ring-1 hover:ring-black cursor-pointer'><span>44,5</span></div>
                  <div className='bg-[#F7F7F7] rounded-md min-h-14 w-1/4 flex items-center justify-center  hover:ring-1 hover:ring-black cursor-pointer'><span>45</span></div>
                  <div className='bg-[#F7F7F7] rounded-md min-h-14 w-1/4 flex items-center justify-center  hover:ring-1 hover:ring-black cursor-pointer'><span>50</span></div>
                </div>

                {/* <div className='w-full flex items-center justify-center gap-4 p'>

                  <div className='bg-[#F7F7F7] rounded-md min-h-14 w-1/4 flex items-center justify-center hover:ring-1 hover:ring-black cursor-pointer'><span>42</span></div>
                  <div className='bg-[#F7F7F7] rounded-md min-h-14 w-1/4 flex items-center justify-center hover:ring-1 hover:ring-black cursor-pointer'><span>42</span></div>
                  <div className='bg-[#F7F7F7] rounded-md min-h-14 w-1/4 flex items-center justify-center hover:ring-1 hover:ring-black cursor-pointer'><span>42</span></div>
                  <div className='bg-[#F7F7F7] rounded-md min-h-14 w-1/4 flex items-center justify-center hover:ring-1 hover:ring-black cursor-pointer' ><span>42</span></div>
                </div> */}

              </article>


            </div>

            <div className='w-full p-2 h-1/3  flex flex-col gap-4 items-center justify-center'>
              <button className='px-4 py-2 bg-black  text-white rounded-full hover:bg-opacity-80 w-full'>Comprar</button>
              <div className='w-full flex items-center bg-[#F7F7F7] justify-center gap-2 px-4 py-2   text-black rounded-full  hover:ring-1 hover:ring-black'>
                <button className=' w-full'>Adicionar aos favoritos </button>
                <CiHeart />
              </div>
            </div>

          </div>
        </div>


      </div>

      <div className='w-full  h-[30vh] flex items-center justify-center flex-col  gap-4'>
        <span>Veja também</span>
        <div className=' flex size-full gap-4 p-2'>
          <div className='bg-slate-600 h-full w-1/2 relative'>
            <Image src={'/nike1.png'} alt='nike1' fill/>
          </div>
          <div className='bg-slate-600 h-full w-1/2 relative'>
            <Image src={'/sapatenis2.png'} alt='nike1' fill/>
          </div>
          <div className='bg-slate-600 h-full w-1/2 relative'>
            <Image src={'/nike3.png'} alt='nike1' fill/>
          </div>
          <div className='bg-slate-600 h-full w-1/2 relative'>
            <Image src={'/sapatenis.png'} alt='nike1' fill/>
          </div>
          <div className='bg-slate-600 h-full w-1/2 relative'>
            <Image src={'/nike2.png'} alt='nike1' fill/>
          </div>
        </div>
      </div>

      <Footer />

    </div>
  )
}
