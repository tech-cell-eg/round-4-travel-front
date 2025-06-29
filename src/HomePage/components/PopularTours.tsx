import CardTour from '@/shared/reuseComponents/CardTour'
import TitleOfComponent from '@/shared/reuseComponents/TitleOfComponent'
import type { Cards } from '@/shared/reuseComponents/types'

function PopularTours({ items }: { items: Cards[] }) {

    return (
        <div>
            <TitleOfComponent title='Find Popular Tours' />
            <div className='flex flex-wrap max-md:flex-col gap-3 justify-center max-md:items-center' >
                {
                    items.slice(0, 8).map((item, index) => {
                        return (
                            <CardTour key={`card-${index}`} image={item.images?.[0] || ""} destination={item.destination} original_price={item.original_price}
                                short_description={item.short_description} review_count={item.review_count} rating={item.rating} duration={item.duration}
                            />

                        )
                    }) 
                }
            </div>

        </div>
    )
}

export default PopularTours