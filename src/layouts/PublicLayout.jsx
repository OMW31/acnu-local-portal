import { Outlet } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { MemberWidget } from '../components/MemberWidget';
import { ThemeSwitcher } from '../components/ThemeSwitcher';
import { usePageMetadata } from '../hooks/usePageMetadata.js';

export function PublicLayout() {
  usePageMetadata();
  
  return (
    <Layout>
      <Navbar />
      <Outlet />
      <Footer />
      <MemberWidget />
      <ThemeSwitcher />
    </Layout>
  );
}
