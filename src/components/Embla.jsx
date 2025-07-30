import { useEffect, useState } from 'react'
import { image2, image3, image4} from '../assets/images'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { IoIosArrowDown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";

export function Embla() {
  const [emblaRef, emblaApi] = useEmblaCarousel({loop: true}, [Autoplay()])
  const [selectedIndex, setSelectedIndex] = useState(0)


  useEffect(() => {
   if (!emblaApi) return

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap())
    }

    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)

    onSelect()
  }, [emblaApi])

  return (
    <div className="relative overflow-hidden w-full" ref={emblaRef}>
  <div className="flex">
    <div className="min-w-full relative">
      <img src={image2} alt="" className="w-full md:h-[50vh] lg:h-[80vh] object-cover" />
      <div className=' absolute top-10 left-10 md:top-40 md:left-26 z-10'>
       <div className='text-white'>
         <h2 className='md:text-[80px] font-extrabold leading-tight font-nunito'><span className="block">Discover and explore</span>
        <span className="block">opportunities around you</span></h2>
        <p className='text-base md:text-lg  font-light leading-tight font-nunito mt-6'><span className='block'>Easily plan your ideal ski trip from home</span> 
        <span className='block'>with the help of professionals</span></p>
       </div>
       <div className='bg-[#E7EBEF] rounded-sm md:rounded-xl mt-10 flex items-center gap-3'>
            <div className='hidden md:flex items-center gap-3 px-8 py-6'>
                <p className='text-[#3A3A3A]'>Category</p>
                <IoIosArrowDown />
            </div>
            <div className='hidden md:flex items-center gap-3 px-8 py-6'>
                <p className='text-[#3A3A3A]'>Location</p>
                <IoIosArrowDown />
            </div>
           <div className='flex items-center md:justify-between md:w-full px-2 py-3 md:py-0'>
             <div className='bg-white rounded-sm md:rounded-lg flex items-center gap-3 px-3  md:py-2'>
                <IoSearch className='text-[#3A3A3A]'/>
                <input type="text" placeholder='Search with keyword' className='w-44 md:w-66 outline-none border-none'/>
            </div>
            <div className='bg-[#0E375F] text-white rounded-sm flex items-center gap-3  md:px-7 md:py-4.5 cursor-pointer'>
                <p className='text-[12px] md:text-[14px'>Search</p>
            </div>
           </div>
            
       </div>
      </div>
      
      <div className="absolute inset-0 bg-black/50"></div>
    </div>
    <div className="min-w-full relative">
      <img src={image3} alt="" className="w-full md:h-[50vh] lg:h-[80vh] object-cover" />
      <div className="absolute inset-0 bg-black/50"></div>
    </div>
    <div className="min-w-full relative">
      <img src={image4} alt="" className="w-full md:h-[50vh] lg:h-[80vh] object-cover" />
      <div className="absolute inset-0 bg-black/50"></div>
    </div>
  </div>
  <div className='absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10'>
  {[0,1,2].map((i) => (
    <button
    key={i}
    className={`rounded-full transition-all duration-300 ${
  selectedIndex === i
    ? 'w-4 h-4 bg-yellow-500'
    : 'w-3 h-3 bg-gray-300'
}`}
    onClick={() =>emblaApi.scrollTo(i)}
    ></button>
  
  ))}

  </div>
    </div>

  )
}
