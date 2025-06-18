const BackendAnimation = () => (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <svg width="100" height="60">
            <circle cx="20" cy="30" r="4" fill="#38bdf8">
                <animate attributeName="r" values="4;6;4" dur="1.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="50" cy="10" r="4" fill="#38bdf8">
                <animate attributeName="r" values="4;6;4" dur="1.5s" begin="0.2s" repeatCount="indefinite" />
            </circle>
            <circle cx="80" cy="50" r="4" fill="#38bdf8">
                <animate attributeName="r" values="4;6;4" dur="1.5s" begin="0.4s" repeatCount="indefinite" />
            </circle>

            <line x1="20" y1="30" x2="50" y2="10" stroke="#38bdf8" strokeWidth="2" strokeDasharray="4 4">
                <animate attributeName="stroke-opacity" values="0;1;0" dur="1.5s" repeatCount="indefinite" />
            </line>
            <line x1="50" y1="10" x2="80" y2="50" stroke="#38bdf8" strokeWidth="2" strokeDasharray="4 4">
                <animate attributeName="stroke-opacity" values="0;1;0" dur="1.5s" begin="0.5s" repeatCount="indefinite" />
            </line>
        </svg>
    </div>
);

export default BackendAnimation;