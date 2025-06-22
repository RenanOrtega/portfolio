import type { SVGProps } from "react";

const BrazilIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        {...props}
        viewBox="0 0 640 480"
        xmlns="http://www.w3.org/2000/svg"
    >
        <rect width="640" height="480" fill="#009b3a" />
        <polygon points="320,70 605,240 320,410 35,240" fill="#ffdf00" />
        <circle cx="320" cy="240" r="100" fill="#002776" />
        <path
            d="M 230 240 A 90 90 0 0 1 410 240 Q 320 260 230 240 Z"
            fill="#fff"
        />
    </svg>
);

export default BrazilIcon;
