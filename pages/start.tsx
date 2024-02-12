import Image from "next/image";
import FrameHomePage from "@/app/components/frame-home-page";
export default function Result() {
    return (
<>
<FrameHomePage />
           
            <Image
              src="https://nfts-dataw.s3.amazonaws.com/magic-8-ball/magic-8-ball-title.png"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={100}
              priority
            />

</>
          
         
       
    );
}
