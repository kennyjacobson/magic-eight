import Image from "next/image";
import Test from "../app/components/test";
import FrameResultPage from "../app/components/frame-result-page"

export default function Result() {
    return (
        <>
      <FrameResultPage />
           
            <Image
              src="https://nfts-dataw.s3.amazonaws.com/magic-8-ball/magic-8-ball-1.png"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={100}
              priority
            />
         
       

    </>
    );
}
