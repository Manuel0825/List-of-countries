import { Outlet } from 'react-router-dom';


export const Home = () => {

  return (
    <>
      <h1>HomePage</h1>
      <Outlet />
    </>
  );
};