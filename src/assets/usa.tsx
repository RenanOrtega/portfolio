import type { SVGProps } from "react";

const USAIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        {...props}
        viewBox="0 0 7410 3900"
        xmlns="http://www.w3.org/2000/svg"
    >
        <rect width="7410" height="3900" fill="#b22234" />
        {[...Array(6)].map((_, i) => (
            <rect
                key={i}
                y={i * 2 * 300 + 300}
                width="7410"
                height="300"
                fill="#fff"
            />
        ))}
        <rect width="2964" height="2100" fill="#3c3b6e" />
        {Array.from({ length: 9 }).map((_, row) =>
            Array.from({ length: row % 2 === 0 ? 6 : 5 }).map((_, col) => {
                const x = col * 494 + (row % 2 === 0 ? 247 : 494);
                const y = row * 233 + 233;
                return (
                    <polygon
                        key={`${row}-${col}`}
                        points={`
                            ${x},${y - 76}
                            ${x + 22},${y - 24}
                            ${x + 72},${y - 24}
                            ${x + 36},${y + 8}
                            ${x + 58},${y + 60}
                            ${x},${y + 30}
                            ${x - 58},${y + 60}
                            ${x - 36},${y + 8}
                            ${x - 72},${y - 24}
                            ${x - 22},${y - 24}
                        `}
                        fill="#fff"
                    />
                );
            })
        )}
    </svg>
);

export default USAIcon;
