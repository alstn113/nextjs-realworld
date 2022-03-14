import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

interface PageProps {
  children: React.ReactNode;
}

const Layout = ({ children }: PageProps) => {
  return (
    <>
      <Header />
      {children}
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
