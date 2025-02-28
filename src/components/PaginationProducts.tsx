import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function PaginationProducts({ 
  currentPage, 
  totalPages, 
  onPageChange 
}: PaginationProps) {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className='w-1/2 h-9'>
      <ul className='flex items-center justify-center gap-4 md:gap-9 w-full h-full'>
        <li
          className={`cursor-pointer ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={handlePrevious}
        >
          <MdKeyboardArrowLeft size={24} />
        </li>

        {Array.from({ length: totalPages }, (_, index) => {
          const pageNumber = index + 1;
          return (
            <li
              key={pageNumber}
              className={`cursor-pointer hover:bg-black hover:transition hover:duration-300 
                hover:ease-out hover:rounded-md hover:text-white px-4 py-2 
                ${currentPage === pageNumber ? 'bg-black text-white rounded-md' : ''}`}
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </li>
          );
        })}

        <li
          className={`cursor-pointer ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={handleNext}
        >
          <MdKeyboardArrowRight size={24} />
        </li>
      </ul>
    </div>
  );
}