import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import "../../shared/style/uniqueStyle.scss"

function FaqComponent() {
  return (
    <div className=' pb-16 border-b border-b-[#E7E6E6] '>
      <h2>Itinerary</h2>
      <ul className="itinerary">
        <li>Day 1: Airport Pick Up</li>
        <li>Day 2: Temples & River Cruise</li>
        <li>Day 3: Massage & Overnight Train <p className="max-w-[500px] text-sm font-normal mt-3">Like on all of our trips, we can collect you from the airport when you land and take
          you directly to your hotel. The first Day is just a check-in Day so you have this
          freedom to explore the city and get settled in.</p></li>
        <li>Day 4: Khao Sok National Park</li>
        <li>Day 5: Travel to Koh Phangan</li>
        <li>Day 6: Morning Chill & Muay Thai Lesson</li>
        <li>Day 7: Island Boat Trip</li>
      </ul>
      <div>
        <h2>FAQ</h2>
        <Accordion
          type="single"
          collapsible
          className="w-full"
          defaultValue="item-1"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>Product Information</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>
                Our flagship product combines cutting-edge technology with sleek
                design. Built with premium materials, it offers unparalleled
                performance and reliability.
              </p>
              <p>
                Key features include advanced processing capabilities, and an
                intuitive user interface designed for both beginners and experts.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Shipping Details</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>
                We offer worldwide shipping through trusted courier partners.
                Standard delivery takes 3-5 business days, while express shipping
                ensures delivery within 1-2 business days.
              </p>
              <p>
                All orders are carefully packaged and fully insured. Track your
                shipment in real-time through our dedicated tracking portal.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Return Policy</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>
                We stand behind our products with a comprehensive 30-day return
                policy. If you&apos;re not completely satisfied, simply return the
                item in its original condition.
              </p>
              <p>
                Our hassle-free return process includes free return shipping and
                full refunds processed within 48 hours of receiving the returned
                item.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

    </div>
  )
}

export default FaqComponent




