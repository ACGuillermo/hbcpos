import { SideNavigation } from './SideNavigation';
import { HomeIcon, ArrowLeftIcon } from '@heroicons/react/24/solid';
import React from 'react';
import Link from 'next/link';

const Logo = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <Link className="flex items-center text-white" href="/">
      <HomeIcon
        className={`mr-4 h-6 w-6 flex-shrink-0 text-white ${
          !isOpen ? 'hidden' : ''
        }`}
        aria-hidden="true"
      />
    </Link>
  );
};

export const Sidebar = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(true);
  const onArrowClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="hidden md:flex md:flex-shrink-0">
        <div className={`flex flex-col ${isOpen ? 'w-44' : 'w-22'}`}>
          <div className="flex h-0 flex-1 flex-col">
            <div className="flex h-16 flex-shrink-0 items-center justify-between bg-gray-900 px-4">
              <Logo isOpen={isOpen} />
              <ArrowLeftIcon
                className={`h-6 w-6 flex-shrink-0 text-white transition duration-150 ease-in-out hover:cursor-pointer ${
                  !isOpen ? 'rotate-180' : ''
                }`}
                onClick={onArrowClick}
                aria-hidden="true"
              />
            </div>
            <div className="flex flex-1 flex-col overflow-y-auto">
              <nav className="flex-1 space-y-1 bg-gray-800 px-2 py-4">
                <SideNavigation isOpen={isOpen} />
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
