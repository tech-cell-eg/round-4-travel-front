interface TitleComponent {
    title: string,
    isSee?: boolean
}

export default function TitleOfComponent({ title, isSee = true }: TitleComponent) {
    return (
        <div className="flex items-center justify-between">
            <h1 className='text-primaryDesign font-bold text-3xl mb-12 max-sm:text-2xl'>{title}</h1>
            {isSee && <p className="text-primaryDesign text-sm cursor-pointer">See all</p>}

        </div>
    )
}
