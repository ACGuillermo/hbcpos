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
      <div className="py-2">
        <div className="mx-2">{children}</div>
      </div>
    </>
  );
};
