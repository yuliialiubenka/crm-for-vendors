import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';

export interface HomePageNavItemProps {
  current?: boolean;
  pathname: string;
  src: string;
  alt: string;
  children: React.ReactNode;
}

export default function HomePageNavItem({
  current,
  pathname,
  src,
  alt,
  children,
}: HomePageNavItemProps) {
  return (
    <li className='p-4'>
      <Link
        href={pathname}
        className={clsx(
          'flex items-center h-9 gap-3.5',
          current &&
            'after:h-full after:ml-auto after:border-2 after:border-purple-200 after:rounded-sm',
        )}
      >
        <Image width={18} height={18} src={src} alt={alt} />
        <span className="font-medium text-zinc-50">{children}</span>
      </Link> 
    </li>
  );
}
