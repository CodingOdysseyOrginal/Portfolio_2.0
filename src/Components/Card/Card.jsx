
import './Card.css';

// eslint-disable-next-line react/prop-types
export default function Card({ image, title, description, githubLink }) {
    return (
        <div className="card">
            <img 
                src={image} 
                alt={`${title} thumbnail`} 
                className="image"
            />
            <div className="content">
                <h3 className="title">{title}</h3>
                <p className="description">
                    {description}
                </p>
                <a href={githubLink} className="link">View on GitHub</a>
            </div>
        </div>
    );
}
