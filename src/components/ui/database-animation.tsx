const DatabaseAnimation = () => (
    <div className="absolute inset-0 flex flex-col items-center justify-end gap-0.5 pointer-events-none">
        <div className="w-4 h-2 bg-primary animate-bounce rounded-sm delay-200" />
        <div className="w-4 h-2 bg-primary animate-bounce rounded-sm delay-400" />
        <div className="w-4 h-2 bg-primary animate-bounce rounded-sm delay-600" />
    </div>
);

export default DatabaseAnimation;