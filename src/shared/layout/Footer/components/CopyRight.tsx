import { assets } from "@/shared/assets/assets"

function CopyRight() {
    let arrImage: string[] = [assets.foot1, assets.foot2, assets.foot3, assets.foot4, assets.foot5, assets.foot6]
    return (
        <div >
            <div className="flex justify-between items-center my-3 px-32 max-md:px-3 gap-3 max-md:flex-col-reverse">
                <p className="text-primaryDesign text-sm">
                    © Copyright Viatours {(new Date()).getFullYear()}
                </p>
                <div className="flex gap-1.5 cursor-pointer">
                    {arrImage.map((item, index) => {
                        return (
                            <img key={`img-${index}`} src={item} alt="notFound" />
                        )
                    })}

                </div>
            </div>

        </div>
    )
}

export default CopyRight