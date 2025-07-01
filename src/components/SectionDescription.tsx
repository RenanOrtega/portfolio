type SectionDescriptionProps = {
    description: string
    title: string
}

const SectionDescription = ({ description, title }: SectionDescriptionProps) => {
    return (
        <div className="flex flex-col gap-2 pb-10 text-center lg:text-left">
            <p className="font-bold text-light text-3xl">{title}</p>
            <p className="text-gray-400 max-w-[350px] text-xl">{description}</p>
        </div>
    )
}

export default SectionDescription;