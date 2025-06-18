const CloudAnimation = () => (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="absolute w-3 h-3 bg-primary rounded-full animate-ping top-3 left-4 opacity-50" />
        <div className="absolute w-4 h-4 bg-primary rounded-full animate-pulse bottom-3 right-5 opacity-70" />
        <div className="absolute w-2.5 h-2.5 bg-primary rounded-full animate-ping top-8 right-6 opacity-40" />
    </div>
);

export default CloudAnimation;