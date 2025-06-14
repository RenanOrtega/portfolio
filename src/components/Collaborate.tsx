import StarBorder from "../Animations/StarBorder/StarBorder";

const Collaborate = () => {
    return (
        <div className="flex flex-col justify-center gap-5 items-center py-30">
            <h3 className="text-4xl font-bold">Let's collaborate.</h3>
            <p className="text-gray-500 text-3xl text-center">
                Get in touch for projects or partnerships.
            </p>
            <StarBorder
                as="button"
                className="custom-class"
                color="cyan"
                speed="5s"
            >
                Contact Me
            </StarBorder>
            <div className="font-semibold transition text-white rounded-2xl">
            </div>
        </div>
    );
}

export default Collaborate;