import { Outlet } from 'react-router-dom';


export function Layout() {
  return (
    <div className="m-auto">
      <main className="">
        <Outlet />
      </main>
    </div>
  );
}
