import { assets } from '@/shared/assets/assets'
import "../shared/style/uniqueStyle.scss";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import type { Cards } from '@/shared/reuseComponents/types';
import FaqComponent from './components/FaqComponent';
import CustomReviews from './components/CustomReviews';
import Reviews from './components/Reviews';
import ReplyComment from './components/ReplyComment';

function DetailsPage({ dataItems }: { dataItems: Cards[] }) {
  let { id } = useParams();
  let [item, setItem] = useState<Cards>()
  useEffect(() => {
    let currItem = dataItems.filter((item) => item.id === Number(id));
    if (currItem) {
      setItem(currItem[0])
    }
    console.log(currItem[0])

  }, [id])
  return (
    <div className='detailsPage text-primaryDesign'>
      <p className='flex items-center gap-5 text-sm font-medium'>
        {item?.features?.best_price_guarantee && <span className='bg-[#EB662B0D] text-secondaryDesign rounded-full px-4 py-2'>Bestseller</span>}
        {item?.features?.free_cancellation && <span className='bg-[#F5F5F5] text-black rounded-full p-3' >Free cancellation</span>}
      </p>
      <h1 className='text-[40px] font-semibold max-lg:text-3xl max-md:text-2xl max-w-[800px] text-primaryDesign'>{item?.title}</h1>
      <p className='flex items-center pl-16 mt-3 mb-8 gap-10 text-primaryDesign max-md:pl-2 max-md:text-center'>
        <span>{item?.rating} ({item?.review_count})</span>
        <span>{item?.destination}</span>
      </p>
      <div className='flex gap-3 h-[512px] max-md:h-full max-md:flex-col'>
        <div className='basis-1/2'>
          <img src={item?.images?.[0]} alt='notFound' className='w-full h-full rounded-xl'
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = assets.card2
            }} />
        </div>
        <div className='flex flex-col gap-3 basis-1/2' >
          <div>
            <img src={item?.images?.[1]} alt='notFound' className='w-full h-[250px] rounded-xl'
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = assets.card2
              }} />
          </div>
          <div className='flex gap-3'>
            <img src={item?.images?.[2]} alt='notFound' className='w-1/2 h-[250px] rounded-xl'
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = assets.card2
              }} />
            <img src={item?.images?.[3]} alt='notFound' className='w-1/2 h-[250px] rounded-xl pr-3'
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = assets.card2
              }} />
          </div>
        </div>
      </div>
      <div className='flex gap-10'>
        <div className='basis-2/3'>
          <div className='pb-16 border-b border-b-[#E7E6E6]'>
            <h2>Tour Overview</h2>
            <p className='max-w-[700px] leading-7 mb-5 text-sm'>{item?.destination}</p>
            <h3 className='font-semibold text-[19px] mb-3'>Tour Highlights</h3>
            <ul className='flex flex-col gap-1 text-sm pl-5 list-disc'>
              <li>Be amazed by the variety of marine life in the archepelago</li>
              <li>Be amazed by the variety of marine life in the archepelago</li>
              <li>Be amazed by the variety of marine life in the archepelago</li>
              <li>Be amazed by the variety of marine life in the archepelago</li>
            </ul>
          </div>
          <div className='include pb-16 border-b border-b-[#E7E6E6]'>
            <h2>What's included</h2>
            <div className='flex gap-24'>
              <ul className='include_red pl-6'>
                <li>Beverages, drinking water, morning tea and
                  buffet lunch</li>
                <li>Local taxes</li>
                <li>Hotel pickup and drop-off by air-conditioned
                  minivan</li>
                <li>InsuranceTransfer to a private pier</li>
                <li>InsuranceTransfer to a private pier</li>
                <li>Tour Guide</li>
              </ul>
              <ul className='include_blue'>
                <li>Towel</li>
                <li>Tips</li>
                <li>Alcoholic Beverages</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='basis-1/3'>
          
        </div>
      </div>
      <FaqComponent />
      <CustomReviews />
      <div className='mt-10'>
        <Reviews />
      </div>
      <ReplyComment />

    </div>
  )
}

export default DetailsPage