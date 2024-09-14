"use client";

import { useEffect, useState } from "react";

export default function Home() {
    const [arr, setArr]: any = useState([]);

    const ran = () => {
        return Math.random() * 16;
    };

	const ran100 = () => {
        return Math.random() * 100;
    };

    const render = () => {
        const array: any = [];

        for (let i = 0; i < 20000; i++) {
            array[i] = { x: ran(), y: ran() };
        }

        return array;
    };

    useEffect(() => {
        const run = () => {
            setArr(render());
        };

		run()

        setInterval(() => {
            run();
        }, 4000);
    }, []);

    return (
        <div className="flex flex-wrap">
            {arr?.map((element: any, index: any) => (
                <div className="flex justify-center items-center size-3">
                    <div
                        style={{
							opacity: `${ran100()}%`,
                            height: `${element.y}px`,
                            minWidth: `${element.x}px`,
                        }}
                        className="bg-white"
                        key={index}
                    ></div>
                </div>
            ))}
        </div>
    );
}
