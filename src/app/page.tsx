import React from "react";
import HomePageHeader from './components/hp-header';
import LottiePlayer from './components/lottie-player';
import FeatureDesc from './components/feature-desc';

export interface PageProps { }

export default function Home({ }: PageProps) {

  return (
    <>
      <HomePageHeader />
      <main className="container max-w-screen-xl flex items-center justify-between">
        <LottiePlayer />
        <FeatureDesc />
      </main>
    </>
  );
}
