import { Outlet } from 'react-router-dom'
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className='dashboard-wrapper'>
        <Sidebar/>
        <main>
          <Navbar/>
          <Outlet/>
        </main>
    </div>
  )
}

export default Dashboard