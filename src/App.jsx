import Sidebar from './components/Sidebar';
import { Outlet } from 'react-router-dom';

export default function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-[200px] w-full">
        <Outlet />
      </div>
    </div>
  );
}
