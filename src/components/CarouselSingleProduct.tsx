import { Products } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';

type CarouselSingleProductTypeProps = {
    productId: number;
    selectedImg: string | string[];
    selectedSize: string | string[] | undefined;
    selectedColor: string | undefined | string[];
}

export default function CarouselSingleProduct({ productId, selectedSize, selectedColor, selectedImg }: CarouselSingleProductTypeProps) {


    const productCurrentImageIndex = selectedImg;
    const SingleProductImages = Products[productId - 1].img;
    const imageIndex = parseInt(productCurrentImageIndex as string, 10);
    const productImgPath = SingleProductImages[0].url[imageIndex];


    const id = productId;

    return (
        <div className='h-[45%] md:h-full w-full sm:w-[90%] md:w-[70%] flex flex-col gap-4'>

            <div className='aspect-square w-full h-[70%] relative'>
                <Image
                    fill
                    src={productImgPath}
                    alt={`product ${id}`}
                    className='object-fill w-full h-full'
                />
            </div>

            <div className='w-full h-auto flex gap-4 items-center justify-start overflow-x-scroll'>
                {SingleProductImages.map((imageGroup) =>
                    imageGroup.url.map((imageUrl, subIndex) => (
                        <Link
                            href={`?imgIndex=${encodeURIComponent(String(subIndex))}&color=${encodeURIComponent(String(selectedColor))}&size=${encodeURIComponent(String(selectedSize))}`}
                            key={`${imageGroup.colorImg}-${subIndex}`}
                            className="bg-[#DBDBDB] w-[calc(25%-12px)] h-full flex-shrink-0 cursor-pointer flex items-center justify-center"
                        >
                            <Image
                                width={930}
                                height={662}
                                src={imageUrl}
                                alt={`Produto - Cor ${imageGroup.colorImg}`}
                                className="object-fill w-full h-full"
                            />
                        </Link>
                    ))
                )}
            </div>

        </div>
    );
}