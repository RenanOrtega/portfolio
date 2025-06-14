import { UserCircle2 } from "lucide-react";

type SectionDescriptionProps = {
    description: string
}

const SectionDescription = ({ description }: SectionDescriptionProps) => {
    return (
        <div className="flex flex-col gap-2 pb-10">
            <UserCircle2 />
            <p className="font-bold">Renan Johny Ortega</p>
            <p className="text-gray-500 max-w-[300px]">{description}</p>
        </div>
    )
}

export default SectionDescription;