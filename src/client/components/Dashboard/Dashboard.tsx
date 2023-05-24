import { useNavigate } from 'react-router-dom';
import Topbar from './Topbar';
import AllLinks from './AllLinks';

const Dashboard = () => {

  return (
    <div>
      <h1>Dashboard</h1>
      <Topbar />
      <AllLinks />
    </div>
  )
}

export default Dashboard;
