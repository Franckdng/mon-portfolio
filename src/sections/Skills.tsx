// src/sections/Skills.tsx
import { skillCategories } from '../data/projects';

const Skills = () => {
    return (
        <div className="hero-wrapper">
            <div className="container">
                {/* Titre central */}
                <h2 className="about-main-title">My <span className="highlight-purple">Skills</span></h2>

                <div className="skills-grid">
                    {skillCategories.map((cat) => (
                        <div key={cat.category} className="skills-column">
                            <h3 className="category-header">{cat.category}</h3>
                            <div className="skills-list-ai">
                                {cat.items.map((skill) => (
                                    <div key={skill.name} className="skill-box">
                                        <div className="skill-label-ai">
                                            <span>{skill.name}</span>
                                            <span className="skill-percent">{skill.level}%</span>
                                        </div>
                                        <div className="progress-track-ai">
                                            <div
                                                className="progress-fill-cyan"
                                                style={{ width: `${skill.level}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;