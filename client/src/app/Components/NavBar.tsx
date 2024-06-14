"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { NAV_LINKS } from '../Constants';
import { Button } from '@/components/ui/button';
import SvgComponent from '../Constants/logo';
import { ModeToggle } from '@/components/ui/darktoggle';
const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/" className='z-50' onClick={() => setIsDropdownOpen(false)}>
      <SvgComponent alt="astro-logo" width={0} height={0} style={{ width: '45px', height: 'auto' }}/>
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 flexCenter cursor-pointer pb-1.5 transition ease-in-out delay-150 duration-300 hover:-translate-y-1 hover:underline hover:underline-offset-4"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <ul className="hidden h-full lg:flex">
        <ModeToggle/>
        </ul>


      {/* Burger Icon for Mobile */}
      <div className="lg:hidden cursor-pointer z-50">
        <Image
          src="/web.webp"
          alt="dropdown"
          width={32}
          height={32}
          onClick={toggleDropdown}
        />
      </div>

      {/* Full Page Dropdown Menu */}
      {isDropdownOpen && (
        <div className="fixed bg-background inset-0 z-40">
          <div className="flex items-center justify-center h-full">
            <ul className="text-2xl">
              {NAV_LINKS.map((link) => (
                <li key={link.key} className="mb-4">
                  <Link href={link.href}
                    className="hover:font-bold"
                    onClick={() => setIsDropdownOpen(false)}>
                      {link.label}

                  </Link>
                </li>
              ))}
              <li className="mb-4">
              <span className="mr-4"> Dark mode </span> <ModeToggle/>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;