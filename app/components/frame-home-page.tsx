import React from 'react';
import {FrameMetadata} from  '@coinbase/onchainkit'

export default function FrameHomePage() {
  let imageSrc = 'https://nfts-dataw.s3.amazonaws.com/magic-8-ball/magic-8-ball-title.png'

    return (
      
      <FrameMetadata
        buttons={[
          {
            label: 'Shake Me!',
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

  