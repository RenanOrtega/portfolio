import { useTranslation } from "react-i18next";
import { testimonialsData } from "../data/testimonials";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

interface TestimonialsProps {
    direction: "left" | "right" | undefined,
    speed: "fast" | "normal" | "slow" | undefined
}

const Testimonials = ({ direction, speed }: TestimonialsProps) => {
    const { t } = useTranslation();

    const items = testimonialsData.map((testimonial) => ({
        ...testimonial,
        quote: t(`testimonials.items.${testimonial.id}.quote`)
    }));

    return (
        <InfiniteMovingCards
            items={items}
            direction={direction}
            speed={speed}
        />
    )
};

export default Testimonials;