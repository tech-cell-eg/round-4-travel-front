import TitleOfComponent from '@/shared/reuseComponents/TitleOfComponent'
import { assets } from '@/shared/assets/assets'
import "../../shared/style/uniqueStyle.scss";

function PopularThings() {

    return (
        <div>
            <TitleOfComponent title={"Popular things to do"} />
            <div className='popularThings flex gap-5 max-sm:flex-col justify-center items-center'>
                <div>
                    <div className='thing'>
                        <img src={assets.img1} alt='notFound' />
                        <p>Cruises</p>
                    </div>
                    <div className='thing'>
                        <img src={assets.img2} alt='notFound' />
                        <p>Museum Tour</p>
                    </div>
                </div>
                <div>
                    <div className='thing'>
                        <img src={assets.img3} alt='notFound' />
                        <p>Beach Tours</p>
                    </div>
                </div>
                <div>
                    <div className='thing'>
                        <img src={assets.img4} alt='notFound' />
                        <p>City Tours</p>
                    </div>
                    <div className='flex gap-5'>
                        <div className='thing'>
                            <img src={assets.img5} alt='notFound' />
                            <p>Cruises</p>
                        </div>
                        <div className='thing'>
                            <img src={assets.img6} alt='notFound' />
                            <p>Museum Tour</p>
                        </div>
                    </div>
                </div>






            </div>

        </div>
    )
}

export default PopularThings