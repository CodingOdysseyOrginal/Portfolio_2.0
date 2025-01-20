
import Card from "../Card/Card";
import './Project.css';
import SOCIcon from './SOCIcon.png';


export default function Project() {
    return (
        <div className="project-container">
            <Card
                image={SOCIcon}
                title="Project 1"
                description="This is a description of Project 1."
                githubLink="https://github.com/CodingOdysseyOrginal"
            />
            <Card
                image={SOCIcon}
                title="Project 2"
                description="This is a description of Project 2."
                githubLink="https://github.com/CodingOdysseyOrginal"
            />
            <Card
                image={SOCIcon}
                title="Project 3"
                description="This is a description of Project 3."
                githubLink="https://github.com/CodingOdysseyOrginal"
            />
        </div>
    );
}
