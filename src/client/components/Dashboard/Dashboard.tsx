
import { useNavigate } from 'react-router-dom';

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
      <button onClick={handleAddLink}>Add Link</button>
      <button onClick={handleEditLink}>Edit Link</button>
      <button onClick={handleViewLink}>View Link</button>
    </div>
  )
}

export default Dashboard;
