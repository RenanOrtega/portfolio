const FrontendAnimation = () => (
    <div className="absolute bottom-2 right-2 flex gap-1 pointer-events-none">
        <div className="w-2.5 h-2.5 bg-primary animate-bounce delay-100 rounded-sm" />
        <div className="w-2.5 h-2.5 bg-primary animate-bounce delay-200 rounded-sm" />
        <div className="w-2.5 h-2.5 bg-primary animate-bounce delay-300 rounded-sm" />
    </div>
);

export default FrontendAnimation;