import { Outlet } from 'react-router-dom';


export function Layout() {
  return (
    <div className="">
      <main className="">
        <Outlet />
      </main>
    </div>
  );
}
