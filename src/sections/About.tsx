// src/sections/About.tsx
const About = () => {
    return (
        <div className="hero-wrapper">
            <div className="about-compact-container">
                {/* Titre de la section bien au milieu */}
                <h2 className="about-main-title">À <span className="highlight-purple">propos</span></h2>

                <div className="about-grid-compact">
                    {/* Colonne Gauche : Ta Bio */}
                    <div className="about-text-zone">
                        <h3 className="about-headline-ai">Futur Ingénieur en <span className="highlight-purple">IA & Data Science</span></h3>
                        <p className="about-description">
                            Étudiant en 4ème année à l'<strong>ESIEA</strong>, je me passionne pour la résolution de problèmes complexes à travers les données. Mon parcours m'a mené jusqu'à l'<strong>UQAC au Canada</strong> pour approfondir mes bases en statistiques.
                        </p>
                        <p className="about-description">
                            Je recherche un stage de <strong>Data Scientist</strong> pour <strong>Avril 2026</strong>. Rigoureux et curieux, j'aime transformer les données brutes en solutions intelligentes.
                        </p>

                        <div className="about-btns">
                            <a href="#contact" className="btn-space-ai">Get In Touch</a>
                            <button className="btn-space-ai">Mon CV</button>
                        </div>
                    </div>

                    {/* Colonne Droite : Tes Expertises (Cartes compactes) */}
                    <div className="about-cards-zone">
                        <div className="mini-expertise-card">
                            <span className="card-emoji">🧠</span>
                            <div className="card-info">
                                <h4>Machine Learning</h4>
                                <p>Modèles prédictifs avec Python, scikit-learn et Pandas.</p>
                            </div>
                        </div>

                        <div className="mini-expertise-card">
                            <span className="card-emoji">📊</span>
                            <div className="card-info">
                                <h4>Data Analytics</h4>
                                <p>Analyse probabiliste et visualisation avec SQL et R.</p>
                            </div>
                        </div>

                        <div className="mini-expertise-card">
                            <span className="card-emoji">💻</span>
                            <div className="card-info">
                                <h4>Ingénierie Logicielle</h4>
                                <p>Développement en C++, Java avec méthodes Agiles.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;