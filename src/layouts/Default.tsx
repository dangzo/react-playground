import Navigation from '@/layouts/Navigation'
import { Outlet } from 'react-router'

const DefaultLayout = () => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default DefaultLayout;