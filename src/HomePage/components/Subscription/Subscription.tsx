import { InputForm } from './InputForm'

function Subscription() {
    return (
        <div className='bg-booking bg-contain bg-no-repeat p-28 pt-[60px] max-xl:pt-28 max-xl:bg-cover max-md:p-10'>
            <div>
                <div className='text-white max-w-96'>
                    <h1 className='tracking-wider font-bold leading-[50px] text-4xl max-md:text-3xl'>Get 5% off your 1st
                        app booking</h1>
                    <p className='text-sm text-[#ffffffcc] font-light mt-5 '>Booking's better on the app. Use promo code
                        "TourBooking" to save!</p>
                </div>
                <InputForm />
            </div>

        </div>
    )
}

export default Subscription