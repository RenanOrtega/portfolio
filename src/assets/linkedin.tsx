import type { SVGProps } from "react";

const LinkedInIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        {...props}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.027-3.037-1.852-3.037-1.853 
    0-2.136 1.445-2.136 2.939v5.667H9.353V9h3.414v1.561h.049c.476-.9 
    1.637-1.852 3.368-1.852 3.598 0 4.263 2.368 
    4.263 5.452v6.291zM5.337 7.433a2.07 
    2.07 0 110-4.139 2.07 2.07 0 010 4.139zM7.119 
    20.452H3.554V9h3.565v11.452zM22.225 
    0H1.771C.792 0 0 .774 0 1.729v20.542C0 
    23.226.792 24 1.771 24h20.451C23.2 
    24 24 23.226 24 22.271V1.729C24 .774 23.2 
    0 22.225 0z"/>
    </svg>
);

export default LinkedInIcon;
