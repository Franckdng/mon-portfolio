const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">Franck <strong>DUONG Portfolio</strong></div>
            <div className="nav-links">
                <a href="#accueil">Accueil</a>
                <a href="#about">À propos</a>
                <a href="#skills">Compétences</a>
                <a href="#projets">Projets</a>
                <a href="#contact">Contact</a>
            </div>
        </nav>
    );
};

export default Navbar;