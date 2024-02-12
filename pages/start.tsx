import Image from "next/image";
// import FrameHomePage from "@/app/components/frame-home-page";
import { FrameMetadata } from '@coinbase/onchainkit'
export default function Result() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">

                <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">

                    <FrameMetadata
                        buttons={[
                            {
                                label: 'Tell me the story',
                            },
                            {
                                action: 'link',
                                label: 'Link to Google',
                                target: 'https://www.google.com'
                            },
                            {
                                action: 'post_redirect',
                                label: 'Redirect to cute pictures',
                            },
                        ]}
                        image={{
                            src: 'https://zizzamia.xyz/park-3.png',
                            aspectRatio: '1:1'
                        }}
                        input={{
                            text: 'Tell me a boat story',
                        }}
                        postUrl="https://zizzamia.xyz/api/frame"
                    />

                    <Image
                        src="https://nfts-dataw.s3.amazonaws.com/magic-8-ball/magic-8-ball-title.png"
                        alt="Vercel Logo"
                        className="dark:invert"
                        width={100}
                        height={100}
                        priority
                    />

                </div>

            </div>

        </main>



    );
}
