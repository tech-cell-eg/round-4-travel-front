import TitleOfComponent from "@/shared/reuseComponents/TitleOfComponent";
import type { Tourz } from "./types"
import { assets } from "@/shared/assets/assets";

function ChooseTourz() {
  let items: Tourz[] = [
    {
      icon: assets.ticket,
      title: "Ultimate flexibility",
      description: "You're in control, with free cancellation and payment options to satisfy any plan or budget.",
    },
    {
      icon: assets.balloon,
      title: "Memorable experiences",
      description: "Browse and book tours and activities so incredible, you'll want to tell your friends.",
    },
    {
      icon: assets.diamond,
      title: "Quality at our core",
      description: "High-quality standards. Millions of reviews. A tourz company.",
    },
    {
      icon: assets.medal,
      title: "Award-winning support",
      description: "New price? New plan? No problem. We're here to help, 24/7.",
    }
  ] 

  return (
    <div>
      <TitleOfComponent title={"Why choose Tourz"} isSee={false} />
      <div className="flex gap-10 flex-wrap max-md:flex-col justify-center mx-auto">
        {items.map((item, index) => {
          return (
            <div key={`item-${index}`} className="flex-1 text-primaryDesign max-md:mx-auto" >
              <img src={item.icon} alt="notFound" className="mb-5" />
              <h3 className="font-medium text-[17px]">{item.title}</h3>
              <p className="text-sm max-w-60">{item.description}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ChooseTourz