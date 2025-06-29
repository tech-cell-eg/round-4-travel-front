
function BookNow() {
    return (
        <div className="bg-destination bg-cover">
            <div className=' max-w-[580px] max-md:p-5 max-md:pt-14 flex flex-col  gap-6 mb-10 p-[120px]'>
                <h1 className='text-primaryDesign font-semibold text-4xl max-md:text-3xl'>Grab up to <span className='text-secondaryDesign'>35% off </span>
                    on your favorite
                    Destination</h1>
                <p className='text-primaryDesign text-sm'>Limited time offer, don't miss the opportunity</p>
                <button className='w-40 rounded-xl h-14 text-white bg-secondaryDesign hover:bg-[#eb662be0]'>Book Now</button>
            </div>
        </div>
    )
}

export default BookNow
