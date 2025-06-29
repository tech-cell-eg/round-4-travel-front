import { assets } from '@/shared/assets/assets';
import type { Cards } from '@/shared/reuseComponents/types'
import { Link } from 'react-router-dom'

function CardItem({ id, features, destination, rating, title, review_count, short_description, duration, original_price, discount_price, image }: Cards) {
    return (
        <div className='border border-[#E7E6E6] rounded-xl p-5 flex gap-3 min-h-[280px] max-lg:h-full max-lg:max-w-[400px] max-lg:mx-auto max-lg:flex-col'>
            <div>
                <img src={image} alt='notFound' className='h-full min-w-[280px] max-lg:w-full'
                    onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = assets.card2
                    }} />
            </div>
            <div className='text-primaryDesign flex flex-col gap-3'>
                <p className='text-sm'>{destination}</p>
                <h3 className='font-medium'>{title}</h3>
                <p className='text-center'>{rating} ({review_count})</p>
                <p className='text-sm'>{short_description}</p>
                <p className='mt-3 flex justify-between items-center text-sm text-secondaryDesign'>
                    {features?.best_price_guarantee && <span>Best Price Guarantee</span>}
                    {features?.best_price_guarantee && <span>Free Cancellation</span>}
                </p>

            </div>
            <div className='basis-1/3 flex flex-col justify-between pl-4 items-center py-3 border-l max-lg:border-l-transparent border-l-[#E7E6E6]'>
                <p className='text-primaryDesign font-medium'>{duration}</p>
                <div>
                    <p className='font-semibold text-lg text-[#b9b6b6] text-center line-through'>${discount_price}</p>
                    <p className='text-primaryDesign font-medium text-[19px] mb-6 text-center'>From ${original_price}</p>
                    <Link to={`/${id}`} className='rounded-xl border border-[#EB662B] p-3  text-[#EB662B] hover:bg-[#EB662B] hover:text-white'>View Details</Link>
                </div>

            </div>


        </div>
    )
}

export default CardItem