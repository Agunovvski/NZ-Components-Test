import * as React from "react"
import { Frame, Color } from "framer"

export function SVG3() {
    return (
        <svg width="24px" viewBox="0 0 63 70">
            <g
                id="Artboard"
                stroke="white"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
            >
                <g id="03_diagram_chart" fill="white" fill-rule="nonzero">
                    <g id="Group">
                        <path
                            d="M30,4 C13.4313752,4 0,17.4310553 0,34 C0,50.5689447 13.4313752,64 30,64 C46.5686248,64 60,50.5689447 60,34 L58,34 C58,49.4643645 45.464066,62 30,62 C14.535934,62 2,49.4643645 2,34 C2,18.5356355 14.535934,6 30,6 L30,4 Z"
                            id="Path"
                        ></path>
                        <path
                            d="M33,0 L33,31 L64,31 L64,30 C64,13.4310553 50.5686248,0 34,0 L33,0 Z M61.9824767,29 L35,29 L35,2.01752353 C49.6690152,2.53242289 61.4675782,14.3307264 61.9824767,29 Z"
                            id="Path"
                        ></path>
                    </g>
                    <polygon
                        id="Path"
                        points="29.5857864 35 49.2928932 54.7071068 50.7071068 53.2928932 30.4142136 33 1 33 1 35"
                    ></polygon>
                    <polygon
                        id="Path"
                        points="29.2928932 33.2928932 9.29289322 53.2928932 10.7071068 54.7071068 30.7071068 34.7071068"
                    ></polygon>
                </g>
            </g>
        </svg>
    )
}

SVG3.defaultProps = {
    height: 24,
    width: 24,
}
