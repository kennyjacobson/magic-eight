import React from 'react';
import {FrameMetadata} from  '@coinbase/onchainkit'

export default function FrameHomePage() {
  let imageSrc = 'https://nfts-dataw.s3.amazonaws.com/magic-8-ball/magic-8-ball-title.png'

    return (
      
      // <FrameMetadata
      //   buttons={[
      //     {
      //       label: 'Shake Me!',
      //     },
    
      //   ]}
      //   image={{
      //    src: imageSrc,
      //    aspectRatio: '1:1'
      //   }}
        
      //   postUrl="https://bespoke-cajeta-fb55fd.netlify.app/result"
      // />

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
      
    );
  }

  