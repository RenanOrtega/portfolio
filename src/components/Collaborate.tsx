import AnimatedPin from "./AnimatedPin";

const Collaborate = () => {
    return (
        <div className="flex flex-col justify-center gap-5 items-center py-30">
            <h3 className="text-4xl font-bold text-dark">Let's collaborate.</h3>
            <p className="text-gray-500 text-3xl text-center">
                Get in touch for projects or partnerships.
            </p>
            <div className="flex flex-col gap-5 items-center justify-center pt-5">
                <span className="flex justify-center items-center text-light text-2xl font-bold w-50 h-10 bg-dark">
                    Social Media
                </span>
                <AnimatedPin />
            </div>
        </div>
    );
}

export default Collaborate;