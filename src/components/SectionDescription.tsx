import { UserCircle2 } from "lucide-react";

type SectionDescriptionProps = {
    description: string
    title: string
}

const SectionDescription = ({ description, title }: SectionDescriptionProps) => {
    return (
        <div className="flex flex-col gap-2 pb-10">
            <UserCircle2 className="text-light" />
            <p className="font-bold text-light">{title}</p>
            <p className="text-gray-400 max-w-[300px]">{description}</p>
        </div>
    )
}

export default SectionDescription;