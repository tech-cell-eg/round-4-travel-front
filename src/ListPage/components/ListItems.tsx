import { Button } from '@/components/ui/button';
import CardItem from './CardItem'
import type { Cards, Paginate } from '@/shared/reuseComponents/types';
import React from 'react';

interface ListItemsProps {
  data: Cards[];
  currentPage: number;
  paginate: Paginate;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

function ListItems({ data, currentPage, paginate, setCurrentPage }: ListItemsProps) {
  return (
    <div>
      <div className='flex flex-col gap-5'>
        {data.map((item, index) => {
          return (
            <CardItem key={`it-${index}`} id={item.id} features={item.features} destination={item.destination}
              rating={item.rating} title={item.title} review_count={item.review_count} short_description={item.short_description}
              duration={item.duration} original_price={item.original_price} discount_price={item.discount_price} image={item.images?.[0] || ""} />
          )
        })}
      </div>
      {paginate.total_pages > 1 && (
        <div className="flex  gap-1.5 space-x-2 py-4 mx-auto mt-5 w-fit">
          <Button
            variant="outline"
            size="sm"
            onClick={() => { setCurrentPage((prev) => Math.max(prev - 1, 1)); scrollTo(0, 0) }}
            disabled={currentPage === 1}
          >
            Previous Page
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              setCurrentPage((prev) => Math.min(prev + 1, paginate.total_pages));
              scrollTo(0, 0)
            }
            }
            disabled={currentPage === paginate.total_pages}
          >
            Next Page
          </Button>
        </div>
      )
      }

    </div >
  )
}

export default ListItems