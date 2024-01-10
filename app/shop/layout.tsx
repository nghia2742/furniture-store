import React, { ReactNode } from 'react';
import Navbar from '@/components/partials/Navbar'
import Footer from '@/components/partials/Footer'
 
type Layout = {
    children: ReactNode;
};

const Layout: React.FC<Layout> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className='border-b'>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout;