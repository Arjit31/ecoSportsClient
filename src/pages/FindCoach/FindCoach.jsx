import CoachList from '../../components/coachList/CoachList';
import './FindCoach.css';

export default function FindCoach(){
    return (

        <div className="coach-finder">
            <div className='wrapSearch'>
                <h1>Find a coach</h1>
                <input type="text" placeholder="Search by name" className="search-bar" />
            </div>
            <CoachList />
        </div>

    );
}