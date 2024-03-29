'use client';

import React, { useRef } from "react";

export interface LottiePlayerProps {}

export default function LottiePlayer({}: LottiePlayerProps) {
    const ref = useRef(null);
    React.useEffect(() => {
      import("@lottiefiles/lottie-player");
    });

    return (
        <lottie-player
          className='w-1/2'
          id="homePageLottie"
          ref={ref}
          autoplay
          loop
          mode="normal"
          src="/images/global-delivery.json"
          style={{ width: "600px", height: "600px" }}>
        </lottie-player>
    );
};
