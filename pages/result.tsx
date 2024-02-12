import React from "react";
import Image from "next/image";
import FrameResultPage from "../app/components/frame-result-page"

export default function Result() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
                    <FrameResultPage />
                    <Image src="https://nfts-dataw.s3.amazonaws.com/magic-8-ball/magic-8-ball-1.png" alt="Vercel Logo" className="dark:invert" width={100} height={24} priority />
                </div>
                
            </div>
        </main>
    );
}
