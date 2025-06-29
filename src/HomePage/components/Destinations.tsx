import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import { assets } from '@/shared/assets/assets';
import type { Destination } from './types';
import TitleOfComponent from '@/shared/reuseComponents/TitleOfComponent';
import { useEffect, useState } from 'react';
import { getDestination } from '@/shared/api/getDestination';

function Destinations() {
    let [data, setData] = useState<Destination[]>([]);
    useEffect(() => {
        getDestination(setData);
    }, [])

    return (
        <div>
            <TitleOfComponent title='Trending destinations' />
            <Swiper
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                breakpoints={{
                    0: {
                        slidesPerView: 3,
                    },
                    768: {
                        slidesPerView: 5,
                    },
                    1024: {
                        slidesPerView: 8,
                    },
                }}
                className="!pb-20"

            >
                {data.map((item, index) => {
                    return (
                        <SwiperSlide key={`side-${index}`}>
                            <img src={item.image || assets.featureImage} alt='notFound'
                                onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.src = assets.featureImage
                                }} />
                            <div className='text-center text-primaryDesign pt-3'>
                                <h3 >{item.name}</h3>
                                <p className='text-xs font-light'>{item.tours_count}</p>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    );
}

export default Destinations
