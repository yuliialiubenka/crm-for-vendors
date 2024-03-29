import React from "react";
import Image from 'next/image';

interface Feature {
  src: string;
  alt: string;
  text: string;
}

export interface FeatureListProps {
  features: Feature[];
}

export default function FeatureList({ features }: FeatureListProps) {
  return (
    <ul className="grid grid-cols-2 gap-6">
      {features.map((feature, index) => (
        <li key={index} className="flex gap-2 items-center bg-white rounded shadow-md p-6">
          <Image
            width={48}
            height={48}
            src={feature.src}
            alt={feature.alt}
          />
          <p className="font-medium">{feature.text}</p>
        </li>
      ))}
    </ul>
  );
};
