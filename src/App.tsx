import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/home/Home';
import Users from './pages/users/Users';
import Products from './pages/products/Products';
import Navbar from './components/navbar/Navbar';
import Menu from './components/menu/Menu';
import Login from './pages/login/Login';
import Footer from './components/footer/Footer';
import './styles/global.scss';

function App() {
  const Layout = () => {
    return (
      <main className='main'>
        <Navbar />
        <div className='container'>
          <div className='menu-container'>
            <Menu />
          </div>
          <div className='content-container'>
            <Outlet />
          </div>
        </div>
        <Footer />
      </main>
    );
  };
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/users',
          element: <Users />,
        },
        {
          path: '/products',
          element: <Products />,
        },
      ],
    },
    {
      path: '/login',
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;