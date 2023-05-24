import { useNavigate } from 'react-router-dom';
import AllLinks from './AllLinks';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleAddLink = () => {
    navigate('/newLink');
  }
  const handleEditLink = () => {
    navigate('/linksEdit');
  }
  const handleViewLink = () => {
    navigate('/links');
  }
  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={handleEditLink}>Edit Link</button>
      <button onClick={handleViewLink}>View Link</button>
      <AllLinks />
    </div>
  )
}

export default Dashboard;
