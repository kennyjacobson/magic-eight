import React from 'react';
import {FrameMetadata} from  '@coinbase/onchainkit'

export default function FrameResultPage() {

    const randomNumber = Math.floor(Math.random() * 12) + 1;
    const imageSrc = `https://nfts-dataw.s3.amazonaws.com/magic-8-ball/magic-8-ball-${randomNumber}.png`;
    console.log(imageSrc);
    return (
      
      <FrameMetadata
        buttons={[
          {
            label: 'Shake Again! ',
          },
        ]}
        image={{
         src: imageSrc,
         aspectRatio: '1:1'
        }}
        
        postUrl="https://bespoke-cajeta-fb55fd.netlify.app/result"
      />
      
    );
  }

  