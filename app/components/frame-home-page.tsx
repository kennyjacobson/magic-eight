import React from 'react';
import {FrameMetadata} from  '@coinbase/onchainkit'

export default function FrameHomePage() {
    return (
      
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
         src: 'https://nfts-dataw.s3.amazonaws.com/magic-8-ball/magic-8-ball-title.png',
         aspectRatio: '1:1'
        }}
        input={{
          text: 'Tell me a boat story',
        }}
        postUrl="https://zizzamia.xyz/api/frame"
      />
      
    );
  }

  