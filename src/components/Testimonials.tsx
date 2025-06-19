import { testimonialsData } from "../data/testimonials";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const Testimonials = () => {
    return (
        <InfiniteMovingCards
            items={testimonialsData}
            direction="right"
            speed="slow"
        />
    );
}

export default Testimonials;