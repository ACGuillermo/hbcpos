import { SideNavigation } from './SideNavigation';
import { HomeIcon } from '@heroicons/react/24/solid';

export const Sidebar = () => {
  return (
    <>
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="flex w-44 flex-col">
          <div className="flex h-0 flex-1 flex-col">
            <div className="flex h-16 flex-shrink-0 items-center bg-gray-900 px-4">
              <HomeIcon
                className="mr-4 h-6 w-6 flex-shrink-0 text-white"
                aria-hidden="true"
              />
            </div>
            <div className="flex flex-1 flex-col overflow-y-auto">
              <nav className="flex-1 space-y-1 bg-gray-800 px-2 py-4">
                <SideNavigation />
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
