
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { CheckboxField } from "./CheckboxField"
import React from "react"

function SearchItem({ setContentSearch }: { setContentSearch: React.Dispatch<React.SetStateAction<string>> }) {
  return (
    <div className='border rounded-xl border-[#E7E6E6]'>
      <div className='bg-secondaryDesign text-white p-8 rounded-t-xl'>
        <p>When are you traveling?</p>
        <input type='text' placeholder='February 05 ~ March 14'
          className=' outline-none rounded-xl p-4 mt-5 text-black' />
      </div>
      <div>
        <Accordion
          type="single"
          collapsible
          className="w-full text-primaryDesign"
          defaultValue="item-1"
        >
          <AccordionItem value="item-1" className="px-6 py-2">
            <AccordionTrigger className="font-medium text-[17px]">Tour Type</AccordionTrigger>
            <AccordionContent >
              <CheckboxField setContentSearch={setContentSearch} />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="px-6 py-2">
            <AccordionTrigger className="font-medium text-[17px]">Filter Price</AccordionTrigger>
            <AccordionContent >
              <CheckboxField setContentSearch={setContentSearch} />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="px-6 py-2">
            <AccordionTrigger className="font-medium text-[17px]">Duration</AccordionTrigger>
            <AccordionContent >
              <CheckboxField setContentSearch={setContentSearch} />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4" className="px-6 py-2">
            <AccordionTrigger className="font-medium text-[17px]">Language</AccordionTrigger>
            <AccordionContent >
              <CheckboxField setContentSearch={setContentSearch} />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5" className="px-6 py-2">
            <AccordionTrigger className="font-medium text-[17px]">Rating</AccordionTrigger>
            <AccordionContent >
              <CheckboxField setContentSearch={setContentSearch} />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6" className="px-6 py-2">
            <AccordionTrigger className="font-medium text-[17px]">Specials</AccordionTrigger>
            <AccordionContent >
              <CheckboxField setContentSearch={setContentSearch} />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

    </div>
  )
}

export default SearchItem






