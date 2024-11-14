import './StudentList.css';

const StudentList = () => {
  const students = ["Student Name", "Student Name", "Student Name", "Student Name", "Student Name", "Student Name", "Student Name", "Student Name", "Student Name"];

  return (
    <div className="student-list">
      {students.map((student, index) => (
        <div className="student-item" key={index}>
          <span>{student}</span>
          <button className="open-profile-btn">Open Profile</button>
        </div>
      ))}
    </div>
  );
};

export default StudentList;
