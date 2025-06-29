import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card"
import "../style/uniqueStyle.scss";
import { assets } from "../assets/assets";
import type { Cards } from "./types";

function CardTour({ destination, rating, review_count, short_description, duration, original_price, image, customWidth = "max-w-[300px]" }: Cards) {

    return (
        <Card className={`customCard w-full ${customWidth}  rounded-xl text-primaryDesign`}>
            <CardHeader className="p-2.5">
                <div className="imageCard">
                    <img src={image} alt="notFound"
                        onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = assets.card1
                        }} />
                </div>
            </CardHeader> 
            <CardContent className="p-2.5">
                <p className="text-sm text-[#717171] -mt-2 pl-5">{destination}</p>
                <h3 className="font-medium pt-2 pb-4">{short_description}</h3>
                <p className="text-center text-sm pb-2">{rating} (${review_count})</p>
            </CardContent>
            <CardFooter className="text-sm font-medium flex-row justify-between items-center pt-2.5 -mb-2.5 border-t border-t-[#eee] gap-2">
                <span>{duration} days</span>
                <span>From ${original_price}</span>
            </CardFooter>
        </Card>
    )
}

export default CardTour

