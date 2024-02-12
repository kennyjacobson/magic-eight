import Image from "next/image";
import Head from "next/head";
// import Test from "../app/components/test";
// import FrameResultPage from "../app/components/frame-result-page"

export default function Result() {
    return (
        <>
      <Head>
                    <meta property="fc:frame" content="vNext" />
                    <meta property="og:image" content="https://nfts-dataw.s3.amazonaws.com/magic-8-ball/magic-8-ball-1.png"></meta>
                    <meta property="fc:frame:image" content="https://nfts-dataw.s3.amazonaws.com/magic-8-ball/magic-8-ball-1.png"></meta>
                    <meta property="fc:frame:image:aspect_ratio" content="1:1"></meta>
                    <meta property="fc:frame:button:1" content="Shake Again"></meta>
                    <meta property="fc:frame:post_url" content="https://bespoke-cajeta-fb55fd.netlify.app/result"></meta>
                    
                    
                    
                    
                    
                    
                    </Head>
           
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
