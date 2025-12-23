// src/sections/Contact.tsx
const Contact = () => {
    return (
        <div className="hero-wrapper">
            <div className="container">
                {/* Titre avec dégradé IA */}
                <h2 className="about-main-title">Contactez-<span className="highlight-purple">moi</span></h2>
                <p className="contact-subtitle">
                    Vous avez un projet en tête ou une opportunité de collaboration ? N'hésitez pas à me contacter !
                </p>

                <div className="contact-grid">
                    {/* Colonne Gauche : Informations */}
                    <div className="contact-info-column">
                        <h3>Coordonnées</h3>
                        <div className="info-item">
                            <span className="info-icon">📧</span>
                            <div>
                                <p className="info-label">Email</p>
                                <p className="info-value">fduong@esiea.fr</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <span className="info-icon">📍</span>
                            <div>
                                <p className="info-label">Localisation école</p>
                                <p className="info-value">Paris / Ivry-sur-Seine, France</p>
                            </div>
                        </div>

                        <div className="contact-socials">
                            <p>Réseaux Sociaux</p>
                            <div className="social-icons">
                                {/* Ton lien LinkedIn est ici */}
                                <a
                                    href="https://www.linkedin.com/in/franck-duong-6a4031273/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-link"
                                >
                                    LinkedIn
                                </a>

                            </div>
                        </div>
                    </div>

                    {/* Colonne Droite : Formulaire */}
                    <div className="contact-form-card">
                        <h3>Envoyer un message</h3>
                        <form className="ai-form">
                            <div className="form-group">
                                <label>Votre Nom</label>
                                <input type="text" placeholder="Franck Duong..." />
                            </div>
                            <div className="form-group">
                                <label>Votre Email</label>
                                <input type="email" placeholder="email@exemple.com" />
                            </div>
                            <div className="form-group">
                                <label>Votre Message</label>
                                <textarea placeholder="Bonjour, j'aimerais discuter de..." rows={4}></textarea>
                            </div>
                            <button type="submit" className="btn-space-ai">
                                Envoyer le message 🚀
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;