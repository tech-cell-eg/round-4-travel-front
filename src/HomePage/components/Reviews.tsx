import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { assets } from '@/shared/assets/assets';
import type { Testimonials } from './types';
import "../../shared/style/uniqueStyle.scss";
import { useEffect, useState } from 'react';
import { getTestimonials } from '@/shared/api/getTestimonials';

function Reviews() {
    let [data, setData] = useState<Testimonials[]>([]);
    useEffect(() => {
        getTestimonials(setData);
    }, [])

    return (
        <div className='reviews'>
            <h1 className='text-center text-primaryDesign font-bold text-3xl mb-12 max-sm:text-2xl'>Customer Reviews</h1>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}

                className="!pb-20 max-w-[500px] text-center"

            >
                {data.map((item, index) => {
                    return (
                        <SwiperSlide key={`side-${index}`}>
                            <div className='imageReview w-[100px] h-[100px] rounded-full mb-12 mx-auto'>
                                <img src={item.avatar} alt='notFound'
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        target.src = assets.reviewImage
                                    }} />
                            </div>
                            <p className='text-secondaryDesign mb-6'>{item.title}</p>
                            <p className='text-primaryDesign leading-9 font-medium text-lg'>{item.message}</p>
                            <p className='flex flex-col gap-1 mt-5 text-primaryDesign text-sm '>{item.name}<span>{item.position}</span></p>

                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    );
}

export default Reviews
