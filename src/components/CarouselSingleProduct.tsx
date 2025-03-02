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
    const SingleProductImages = Products[productId - 1].img;
    const selectedImageGroup = SingleProductImages.find(
        (group) => group.colorImg === selectedColor
    ) || SingleProductImages[0];

    // Validação do índice
    const imageIndex = Math.max(0, Math.min(
        parseInt(selectedImg as string, 10),
        selectedImageGroup.url.length - 1
    ));

    const productImgPath = selectedImageGroup.url[imageIndex];

    return (
        <div className='h-[45%] md:h-full w-full sm:w-[90%] md:w-[70%] flex flex-col gap-4'>
            
            {/* Imagem Principal */}
            <div className='aspect-square w-full h-[70%] relative'>
                <Image
                    fill
                    src={productImgPath}
                    alt={`product ${productId}`}
                    className='object-fill w-full h-full'
                    priority
                />
            </div>

            {/* Thumbnails */}
            <div className='w-full h-auto flex gap-4 items-center justify-start overflow-x-scroll'>
                {selectedImageGroup.url.map((imageUrl, subIndex) => (
                    <Link
                        href={`?imgIndex=${subIndex}&color=${selectedImageGroup.colorImg}&size=${selectedSize}`}
                        key={`${selectedImageGroup.colorImg}-${subIndex}`}
                        className="bg-[#DBDBDB] w-[calc(25%-12px)] h-full flex-shrink-0 cursor-pointer flex items-center justify-center"
                    >
                        <Image
                            width={930}
                            height={662}
                            src={imageUrl}
                            alt={`Thumbnail - ${selectedImageGroup.colorImg}`}
                            className="object-fill w-full h-full"
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
}