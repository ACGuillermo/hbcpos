import Head from 'next/head';

type ContentLayoutProps = {
  children: React.ReactNode;
  title: string;
};

export const ContentLayout = ({ children, title }: ContentLayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="mb-10 h-screen bg-gray-100 py-2">
        <div className="mx-2 pb-4">{children}</div>
      </div>
    </>
  );
};
