// --- IMPORTATION DES IMAGES DEPUIS ASSETS ---
// Vite transformera ces imports en URLs valides lors du build
import beeImg from '../assets/bee.png';
import sonoreImg from '../assets/sonore.png';
import cancerImg from '../assets/cancer.png';

export interface Project {
    title: string;
    desc: string;
    tags: string[];
    link?: string;
    image: string; // Cette propriété contiendra l'URL importée
}

export const projects: Project[] = [
    {
        title: "BeeSafe Dashboard 🐝",
        desc: "Surveillance de ruches connectées avec détection d'anomalies et architecture MVC.",
        tags: ["Python", "MVC", "API REST"],
        link: "https://gitlab.esiea.fr/fduong/beesafe-dashboard-hammaz-yanis-duong-franck.git",
        image: beeImg // Utilise la variable importée
    },
    {
        title: "Ad Infinitum 🔊",
        desc: "Réseau de capteurs urbains pour la visualisation en temps réel des nuisances sonores.",
        tags: ["Data Viz", "Capteurs", "Web"],
        link: "https://gitlab.esiea.fr/may/ad_infinitum.git",
        image: sonoreImg // Utilise la variable importée
    },
    {
        title: "Analyse Radiothérapie 🏥",
        desc: "Modélisation de données cliniques pour l'optimisation des traitements du cancer du sein.",
        tags: ["R", "Statistiques", "Santé"],
        image: cancerImg // Utilise la variable importée
    }
];

// src/data/projects.ts

export const skillCategories = [
    {
        category: "Data Science",
        items: [
            { name: "Python", level: 90 },
            { name: "Machine Learning", level: 85 },
            { name: "Pandas & Numpy", level: 80 },
            { name: "SQL", level: 75 },
            { name: "R", level: 70 }
        ]
    },
    {
        category: "Software Engineering",
        items: [
            { name: "C / C++", level: 80 },
            { name: "Java", level: 75 },
            { name: "Git / GitLab", level: 85 },
            { name: "Architecture MVC", level: 80 },
            { name: "Linux", level: 70 }
        ]
    }
];