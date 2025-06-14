const Collaborate = () => {
    return (
        <div className="flex flex-col justify-center gap-5 items-center py-30">
            <h3 className="text-4xl font-bold">Let's collaborate.</h3>
            <p className="text-gray-500 text-3xl text-center">
                Get in touch for projects or partnerships.
            </p>
            <div className="bg-black hover:bg-neutral-800 font-semibold transition text-white rounded-2xl">
                <button className="px-3 py-1 cursor-pointer">
                    Contact Me
                </button>
            </div>
        </div>
    );
}

export default Collaborate;