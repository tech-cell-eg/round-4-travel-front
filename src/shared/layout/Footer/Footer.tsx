import { InputForm } from "@/HomePage/components/Subscription/InputForm";
import "../../style/uniqueStyle.scss";
import CopyRight from "./components/CopyRight";

function Footer() {
  return (
    <>
      <div className='footer bg-footer bg-cover'>
        <div className='p-28 max-md:p-10 max-md:py-24'>
          <div className='flex justify-between pb-16 border-b border-b-[#EB662B26] max-md:flex-col'>
            <p className='text-lg font-medium text-primaryDesign'>Speak to our expert at <span className='text-secondaryDesign'>1-800-453-6744</span></p>
            <p className='text-primaryDesign'>Follow Us</p>
          </div>
          <div className='mt-16 flex gap-4 justify-between flex-wrap max-md:flex-col'>
            <div className="max-w-96">
              <h3>Contact</h3>
              <ul>
                <li>328 Queensberry Street, North Melbourne VIC3051,
                  Australia.</li>
                <li>hi@viatours.com</li>
              </ul>
            </div>
            <div>
              <h3>Company</h3>
              <ul>
                <li>About Us</li>
                <li>Tourz Reviews</li>
                <li>Contact Us</li>
                <li>Travel Guides</li>
                <li>Data Policy</li>
                <li>Cookie Policy</li>
                <li>Legal</li>
                <li>Sitemap</li>
              </ul>
            </div>
            <div>
              <h3>Support</h3>
              <ul>
                <li>Get in Touch</li>
                <li>Help center</li>
                <li>Live chat</li>
                <li>How it works</li>
              </ul>
            </div>
            <div className="flex flex-col max-w-[250px]">
              <div>
                <h3>Newsletter</h3>
                <ul>
                  <li>Subscribe to the free newsletter and stay
                    up to date</li>
                  <li className="-mt-12">
                    <InputForm overlapping={true} />
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mt-4">Mobile Apps</h3>
                <ul className="pl-4">
                  <li>iOS App</li>
                  <li>Android App</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
      <CopyRight />
    </>
  )
}

export default Footer