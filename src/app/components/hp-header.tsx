'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HomePageNavItem from '@/app/components/hp-nav-item';
import { usePathname, useRouter } from 'next/navigation';

export interface HomePageHeaderProps {}

export default function HomePageHeader({}: HomePageHeaderProps) {
  const router = useRouter();
  const pathname = usePathname();

  const handleExitClick = () => {
    router.push('/');
  };

  return (
    <header className="w-full bg-gray-900">
      <div className="container max-w-screen-xl flex justify-between">
        <Link href="/" className="flex p-4">
          <Image
            width={122}
            height={25}
            src="/icons/logo.svg"
            alt="logo"
          />
        </Link>
        <div className="flex space-x-6">
            <ul className="flex space-x-6">
            <HomePageNavItem
                current={pathname === '/dashboard'}
                pathname="/dashboard"
                src="/icons/squares.svg"
                alt="dashboard icon"
            >
                Dashboard
            </HomePageNavItem>
            <HomePageNavItem
                current={pathname === '/companies'}
                pathname="/companies"
                src="/icons/briefcase.svg"
                alt="companies icon"
            >
                Companies
            </HomePageNavItem>
            </ul>
            <button
                className="flex items-center gap-2 p-4"
                onClick={handleExitClick}
            >
                <Image
                    width={18}
                    height={18}
                    src="/icons/arrow-left-on-rectangle.svg"
                    alt="exit icon"
                />
                <span className="font-medium text-white">Log out</span>
            </button>
        </div>
      </div>
    </header>
  );
}
