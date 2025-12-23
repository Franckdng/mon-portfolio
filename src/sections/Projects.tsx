// src/sections/Projects.tsx
import { projects } from '../data/projects';

const Projects = () => {
    return (
        /* hero-wrapper assure un centrage vertical et horizontal total */
        <div className="hero-wrapper">
            <div className="container">
                {/* Titre de section stylisé */}
                <h2 className="project-main-title">
                    Mes <span className="highlight-purple">projets</span>
                </h2>

                <p className="project-subtitle">
                    Voici quelques-uns de mes projets récents, conçus avec une attention particulière à l'analyse de données et à la performance.
                </p>

                {/* Grille horizontale de 3 colonnes */}
                <div className="project-grid">
                    {projects.map((p) => (
                        <div key={p.title} className="project-card">
                            {/* Conteneur d'image avec effet de zoom au survol */}
                            <div className="project-image-container">
                                <img src={p.image} alt={p.title} className="project-img" />
                            </div>

                            <div className="project-card-content">
                                {/* Tags technologiques en format "pill" */}
                                <div className="project-tags">
                                    {p.tags.map(tag => (
                                        <span key={tag} className="tag-pill">{tag}</span>
                                    ))}
                                </div>

                                <h4 className="project-title-text">{p.title}</h4>
                                <p className="project-desc-text">{p.desc}</p>

                                {/* Liens vers les dépôts GitLab/GitHub */}
                                <div className="project-links">
                                    {p.link && (
                                        <a href={p.link} target="_blank" rel="noopener noreferrer" className="project-link-icon">
                                            {/* Icône GitLab / Code Source */}
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.74 2.11-6.48a1.27 1.27 0 0 1 2.42 0L8.91 9.7h6.18l2.11-6.48a1.27 1.27 0 0 1 2.42 0l2.11 6.48 1.22 3.74a.84.84 0 0 1-.3.94z"></path>
                                            </svg>
                                        </a>
                                    )}
                                    {/* Optionnel : Icône lien externe */}
                                    <a href="#" className="project-link-icon">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                            <polyline points="15 3 21 3 21 9"></polyline>
                                            <line x1="10" y1="14" x2="21" y2="3"></line>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;