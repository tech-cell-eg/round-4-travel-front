import { assets } from '@/shared/assets/assets'

function Reviews() {
    return (
        <div>
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-4'>
                    <img src={assets.img1} alt='notFound' className='w-10 h-10 rounded-full' />
                    <h3>Menna Bashir</h3>
                </div>
                <p>Nov 2024</p>
            </div>
            <p className='pl-16 my-5 font-medium'>Take this tour! Its fantastic!</p>
            <p>Great for 4-5 hours to explore. Really a lot to see and tons of photo spots. Even have a passport for you to collect all the
                stamps as a souvenir. Must see for a Harry Potter fan.</p>
            <div className='flex gap-5 my-5 max-md:flex-wrap max-md:justify-center'>
                <img src={assets.img2} alt="notFound" className='w-32 h-32 rounded-xl' />
                <img src={assets.img3} alt="notFound" className='w-32 h-32 rounded-xl' />
                <img src={assets.img4} alt="notFound" className='w-32 h-32 rounded-xl' />
            </div>
            <div className='pl-8 flex gap-8'><button className='hover:text-green-700'>Helpful</button><button className='hover:text-red-600'>Not helpful</button></div>

        </div>
    )
}

export default Reviews