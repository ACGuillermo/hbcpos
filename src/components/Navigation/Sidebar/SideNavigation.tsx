import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  BanknotesIcon,
  HomeIcon,
  UserGroupIcon,
} from '@heroicons/react/24/solid';

type SideNavigationItem = {
  name: string;
  to: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
};

export const SideNavigation = () => {
  const router = useRouter();
  const navigation: SideNavigationItem[] = [
    { name: 'Dashboard', to: '/', icon: HomeIcon },
    { name: 'Sale', to: '/sales', icon: BanknotesIcon },
    { name: 'Clients', to: '/clients', icon: UserGroupIcon },
  ];
  return (
    <>
      {navigation.map((item) => (
        <Link
          key={item.name}
          href={item.to}
          className={`flex items-center rounded-md px-2 py-2 text-sm font-medium text-white hover:bg-white/10 ${
            router.pathname === item.to ? 'bg-white/10' : ''
          }`}
        >
          {item.icon && (
            <item.icon
              className="mr-4 h-6 w-6 flex-shrink-0"
              aria-hidden="true"
            />
          )}
          {item.name}
        </Link>
      ))}
    </>
  );
};
