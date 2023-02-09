import Header from './Header';

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }: Props) => {
  return (
    <>
      <div className='h-screen'>
        <Header />
        <main className='h-[90%] overflow-y-auto py-5 px-4 my-0'>
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
