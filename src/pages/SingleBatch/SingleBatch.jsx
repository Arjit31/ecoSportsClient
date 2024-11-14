import Sidebar from '../../components/Sidebar/Sidebar';
import StudentList from '../../components/StudentList/StudentList';
import './SingleBatch.css';

const SingleBatch = () => {
  return (
    <div className="main-container">
      <div className="content-container">
        <Sidebar />
        <StudentList />
      </div>
    </div>
  );
};

export default SingleBatch;
