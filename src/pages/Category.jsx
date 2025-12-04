import React from 'react'
import  Embla  from '../components/Embla2'
import { categoriesData2 } from '../data/categoriesData2'
import CatCard from '../components/CatCard';


export default function Category() {
  

  return (
    <main>
        <div className='w-full relative mb-20'>
          <Embla />
          <div className='px-28 pt-12'>
            <h2 className="text-primary font-semibold text-2xl">Categories</h2>
          </div>
          <div className='grid grid-cols-2 lg:grid-cols-4 px-4 md:px-28 pt-4 w-full gap-4'>
            {categoriesData2.map((cate, index) => {
                      const columns = 4;
                      const row = Math.floor(index / columns);
                      const col = index % columns;
            
                      const isEvenRow = row % 2 === 0;
                      const color = (isEvenRow ? col % 2 === 0 : col % 2 !== 0)
                        ? "blue"
                        : "yellow";

                        
                      return (
                        <CatCard
                          key={cate.id}
                          image={cate.image}
                          title={cate.title}
                          color={color}
                          
                        />
                      );
                    })}
          </div>
        </div>
    </main>
  )
}
