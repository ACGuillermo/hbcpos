import { Sidebar } from '../Navigation';

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      <Sidebar />
      <main className="relative flex-1 focus:outline-none">{children}</main>
    </div>
  );
};
