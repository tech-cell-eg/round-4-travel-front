import CardTour from '@/shared/reuseComponents/CardTour'
import TitleOfComponent from '@/shared/reuseComponents/TitleOfComponent'
import type { Cards } from '@/shared/reuseComponents/types'

function TopTrending({ items }: { items: Cards[] }) {

    return (
        <div className='bg-[#F5F5F5] rounded-xl  p-28 max-md:p-10'>
            <TitleOfComponent title='Top Trending' />
            <div className='flex flex-wrap max-md:flex-col gap-3 justify-center max-md:items-center'>
                {
                    items.slice(0, 4).map((item, index) => {
                        return (
                            <CardTour key={`card2-${index}`} image={item.images?.[0] || ""} destination={item.destination} original_price={item.original_price}
                                short_description={item.short_description} review_count={item.review_count} rating={item.rating} duration={item.duration}
                                customWidth={"max-w-[260px]"}
                            />

                        )
                    })
                }
            </div>
        </div>
    )
}

export default TopTrending