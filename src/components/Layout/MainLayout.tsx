import { Sidebar } from '../Navigation';
// type UserNavigationItem = {
//   name: string;
//   to: string;
//   onClick?: () => void;
// };

// const UserNavigation = () => {
//   const { logout } = useAuth();

//   const userNavigation = [
//     { name: 'Your Profile', to: './profile' },
//     {
//       name: 'Sign out',
//       to: '',
//       onClick: () => {
//         logout();
//       },
//     },
//   ].filter(Boolean) as UserNavigationItem[];

//   return (
//     <Menu as="div" className="relative ml-3">
//       {({ open }) => (
//         <>
//           <div>
//             <Menu.Button className="flex  max-w-xs items-center rounded-full bg-gray-200 p-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
//               <span className="sr-only">Open user menu</span>
//               <UserIcon className="h-8 w-8 rounded-full" />
//             </Menu.Button>
//           </div>
//           <Transition
//             show={open}
//             as={React.Fragment}
//             enter="transition ease-out duration-100"
//             enterFrom="transform opacity-0 scale-95"
//             enterTo="transform opacity-100 scale-100"
//             leave="transition ease-in duration-75"
//             leaveFrom="transform opacity-100 scale-100"
//             leaveTo="transform opacity-0 scale-95"
//           >
//             <Menu.Items
//               static
//               className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
//             >
//               {userNavigation.map((item) => (
//                 <Menu.Item key={item.name}>
//                   {({ active }) => (
//                     <Link
//                       onClick={item.onClick}
//                       to={item.to}
//                       className={clsx(
//                         active ? 'bg-gray-100' : '',
//                         'block px-4 py-2 text-sm text-gray-700',
//                       )}
//                     >
//                       {item.name}
//                     </Link>
//                   )}
//                 </Menu.Item>
//               ))}
//             </Menu.Items>
//           </Transition>
//         </>
//       )}
//     </Menu>
//   );
// };

// const Logo = () => {
//   return (
//     <Link className="flex items-center text-white" to=".">
//       <img className="h-8 w-auto" src={logo} alt="Workflow" />
//       <span className="text-xl font-semibold text-white">
//         Bulletproof React
//       </span>
//     </Link>
//   );
// };

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      <Sidebar />
      <main className="relative flex-1 overflow-y-auto focus:outline-none">
        {children}
      </main>
    </div>
  );
};
