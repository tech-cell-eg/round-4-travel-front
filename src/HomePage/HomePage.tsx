import { useEffect, useState } from 'react'
import BookNow from './components/BookNow'
import ChooseTourz from './components/ChooseTourz'
import Destinations from './components/Destinations'
import Hero from './components/Hero'
import PopularThings from './components/PopularThings'
import PopularTours from './components/PopularTours'
import Reviews from './components/Reviews'
import Subscription from './components/Subscription/Subscription'
import TopTrending from './components/TopTrending'
import { getCards } from '@/shared/api/getCards'
import type { Cards } from '@/shared/reuseComponents/types'

function HomePage() {
  let [data, setData] = useState<Cards[]>([]);
  useEffect(() => {
    getCards(setData);
  }, [])
  return (
    <div className='flex flex-col gap-32'>
      <Hero />
      <ChooseTourz />
      <Destinations />
      <PopularTours items={data} />
      <BookNow />
      <PopularThings />
      <TopTrending items={data} />
      <Reviews />
      <Subscription />
    </div>
  )
}

export default HomePage