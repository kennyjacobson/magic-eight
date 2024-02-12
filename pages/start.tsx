import Image from "next/image";
// import FrameHomePage from "@/app/components/frame-home-page";
import {FrameMetadata} from  '@coinbase/onchainkit'
export default function Result() {
    return (
<>
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

</>
          
         
       
    );
}
