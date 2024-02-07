import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <>
      <main className="container mx-auto p-4 flex min-h-screen justify-center items-center">
        <div className="">
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default AuthLayout;
