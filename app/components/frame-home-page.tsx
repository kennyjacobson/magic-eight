'use client'
import React from 'react';
import {FrameMetadata} from  '@coinbase/onchainkit'
import { useSearchParams  } from 'next/navigation'

export default function FrameHomePage() {
  // const router = useRouter();
  // const { getMessage } = router.query;
  const searchParams = useSearchParams()
  console.log(searchParams)

  let imageSrc = 'https://nfts-dataw.s3.amazonaws.com/magic-8-ball/magic-8-ball-title.png'
  
  const getMessage = searchParams.get('getMessage');
  console.log(getMessage)
  if (getMessage) {
    // if we have a querystring, we'll use the querystring to generate a random number
    // and use that number to generate a random image
    const randomNumber = Math.floor(Math.random() * 12) + 1;
    imageSrc = `https://nfts-dataw.s3.amazonaws.com/magic-8-ball/magic-8-ball-${randomNumber}.png`;
  }

    return (
      
      <FrameMetadata
        buttons={[
          {
            label: 'Shake it!',
          },
         
        ]}
        image={{
         src: imageSrc,
         aspectRatio: '1:1'
        }}
        
        postUrl="https://bespoke-cajeta-fb55fd.netlify.app/?getMessage=true"
      />
      
    );
  }

  