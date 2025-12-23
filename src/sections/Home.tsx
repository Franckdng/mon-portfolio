// src/sections/Home.tsx

const Home = () => {
    return (
        /* hero-wrapper assure le centrage vertical et horizontal total */
        <div className="hero-wrapper">
            <div className="container">
                {/* Titre principal : Blanc + Dégradé Cyan/Bleu IA */}
                <h1 className="hero-title">
                    Salut, je m'appelle <span className="highlight-purple">Franck DUONG</span>
                </h1>

                {/* Sous-titre : Gras sur ESIEA */}
                <p className="hero-subtitle">
                    Étudiant Ingénieur à <strong>ESIEA</strong> | IA & Data Science
                </p>

                {/* Description : Mise en avant du stage et de la date */}
                <p className="hero-description">
                    Passionné par l'analyse de données et le Machine Learning.
                    En recherche d'un stage de <strong>Data Scientist</strong> pour <strong>Avril 2026</strong>.
                </p>

                {/* Bouton d'action */}
                <div className="hero-actions">
                    <a href="#projets" className="btn-space-ai">
                        Voir mes travaux
                    </a>
                </div>

                {/* Indicateur de défilement centré */}
                <div className="scroll-indicator">
                    <span>Scroll</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Home;