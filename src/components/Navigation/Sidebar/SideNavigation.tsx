import Link from 'next/link';
import { useRouter } from 'next/router';

type SideNavigationItem = {
  name: string;
  to: string;
  icon?: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
};

export const SideNavigation = () => {
  const router = useRouter();
  const navigation: SideNavigationItem[] = [
    { name: 'Dashboard', to: '/' },
    { name: 'Sale', to: '/sales' },
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
          {item.name}
        </Link>
      ))}
    </>
  );
};
