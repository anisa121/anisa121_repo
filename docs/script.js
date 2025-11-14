// Language switching functionality
const langSwitch = document.getElementById('lang-switch');
let currentLang = 'en';

const translations = {
    en: {
        heroTitle: "Transform Classroom Learning",
        heroSubtitle: "Peer Learning & Real-Time Engagement in One App",
        heroDesc: "Empower teachers and students with intelligent peer pairing and instant feedback systems. Solve multiple classroom challenges with our iOS app designed for secondary schools.",
        requestDemo: "Request Demo",
        solutionsTitle: "Two Powerful Solutions in One App",
        pathway1Title: "Pathway 1: Peer Learning Orchestration",
        pathway1Desc: "Core Hypothesis: Students learn best from peers just slightly ahead of them. Our classroom-based platform intelligently pairs students for structured micro-teaching sessions during supervised class time.",
        pathway1Li1: "Assesses mastery by topic, not overall level",
        pathway1Li2: "Creates optimal learning pairs (1-2 level gaps)",
        pathway1Li3: "Provides 10-minute structured protocols",
        pathway1Li4: "Gamified teaching practice with progress tracking",
        pathway2Title: "Pathway 2: Real-Time Engagement Thermometer",
        pathway2Desc: "Core Hypothesis: Teachers can't differentiate without knowing engagement levels. A nominative real-time feedback system provides actionable data for immediate intervention.",
        pathway2Li1: "Simple student interface: \"Lost\" / \"Need example\" / \"Got it\"",
        pathway2Li2: "Pace feedback: \"Too fast\" / \"Just right\" / \"Too slow\"",
        pathway2Li3: "Teacher dashboard with real-time, nominative data",
        pathway2Li4: "AI-suggested interventions and exercise bank",
        benefitsTitle: "Combined Benefits for Everyone",
        studentsTitle: "For Students",
        studentsLi1: "Personalized support through peer learning",
        studentsLi2: "Voice engagement without embarrassment",
        studentsLi3: "Practice teaching to deepen understanding",
        studentsLi4: "Better-paced lessons with real-time feedback",
        teachersTitle: "For Teachers",
        teachersLi1: "Immediate, actionable feedback on engagement",
        teachersLi2: "Multiplication of teaching capacity",
        teachersLi3: "AI-suggested interventions and exercises",
        teachersLi4: "Data-driven insights for lesson planning",
        parentsTitle: "For Parents",
        parentsLi1: "Track child's progress and engagement",
        parentsLi2: "Access to classroom insights",
        parentsLi3: "Safe, supervised learning environment",
        parentsLi4: "Support for differentiated education",
        safeguardsTitle: "Safety & Implementation Safeguards",
        classroomOnlyTitle: "Classroom-Only Interactions",
        classroomOnlyLi1: "No remote connections - all activities in-person",
        classroomOnlyLi2: "Teacher supervision at all times",
        classroomOnlyLi3: "Structured protocols prevent disruption",
        classroomOnlyLi4: "Rotation system prevents social dynamics issues",
        privacyTitle: "Privacy & Accountability",
        privacyLi1: "Nominative tracking for real accountability",
        privacyLi2: "Teacher-only visibility of responses",
        privacyLi3: "Silent operation - no class disruption",
        privacyLi4: "Usage analytics to detect misuse",
        challengesTitle: "Addressing Key Challenges",
        challenge1Title: "Engagement & Honesty",
        challenge1Desc1: "Will students take peer teaching seriously? Can nominative tracking encourage honesty without pressure?",
        challenge1Desc2: "Our approach: Gamification, structured protocols, and teacher validation ensure meaningful participation.",
        challenge2Title: "Classroom Flow",
        challenge2Desc1: "Can teachers respond to real-time data without disrupting lessons? What's the right balance of immediate vs. post-class intervention?",
        challenge2Desc2: "Our approach: Silent feedback system and AI-suggested actions that teachers can implement seamlessly.",
        challenge3Title: "Time & Resources",
        challenge3Desc1: "Will 55-minute periods provide sufficient time? How to build a comprehensive exercise bank?",
        challenge3Desc2: "Our approach: 10-minute micro-sessions and a growing library of ready-made differentiated activities.",
        demoTitle: "Experience the Future of Classroom Learning",
        demoDesc: "Request a personalized demo to see how our dual-pathway system can transform your school's teaching and learning experience.",
        comingSoon: "Coming Soon",
        namePlaceholder: "Name",
        surnamePlaceholder: "Surname",
        emailPlaceholder: "Email Address",
        classLevelPlaceholder: "Class Level",
        whoApplies: "Who Applies",
        teacher: "Teacher",
        parent: "Parent",
        student: "Student",
        other: "Other",
        submitDemo: "Request Demo"
    },
    fr: {
        heroTitle: "Transformer l'Apprentissage en Classe",
        heroSubtitle: "Apprentissage par les Pairs et Engagement en Temps Réel dans une Seule App",
        heroDesc: "Autonomisez les enseignants et les élèves avec des systèmes d'appariement intelligent des pairs et de retour instantané. Résolvez plusieurs défis en classe avec notre application iOS conçue pour les écoles secondaires.",
        requestDemo: "Demander une Démo",
        solutionsTitle: "Deux Solutions Puissantes dans une Seule App",
        pathway1Title: "Voie 1 : Orchestration de l'Apprentissage par les Pairs",
        pathway1Desc: "Hypothèse Centrale : Les élèves apprennent mieux des pairs juste un peu en avance sur eux. Notre plateforme basée en classe apparie intelligemment les élèves pour des sessions de micro-enseignement structuré pendant le temps de classe supervisé.",
        pathway1Li1: "Évalue la maîtrise par sujet, pas le niveau global",
        pathway1Li2: "Crée des paires d'apprentissage optimales (écarts de 1-2 niveaux)",
        pathway1Li3: "Fournit des protocoles structurés de 10 minutes",
        pathway1Li4: "Pratique d'enseignement gamifiée avec suivi des progrès",
        pathway2Title: "Voie 2 : Thermomètre d'Engagement en Temps Réel",
        pathway2Desc: "Hypothèse Centrale : Les enseignants ne peuvent pas différencier sans connaître les niveaux d'engagement. Un système de retour nominatif en temps réel fournit des données exploitables pour une intervention immédiate.",
        pathway2Li1: "Interface élève simple : \"Perdu\" / \"Besoin d'exemple\" / \"Compris\"",
        pathway2Li2: "Retour sur le rythme : \"Trop rapide\" / \"Juste bien\" / \"Trop lent\"",
        pathway2Li3: "Tableau de bord enseignant avec données nominatives en temps réel",
        pathway2Li4: "Interventions suggérées par IA et banque d'exercices",
        benefitsTitle: "Avantages Combinés pour Tous",
        studentsTitle: "Pour les Élèves",
        studentsLi1: "Soutien personnalisé grâce à l'apprentissage par les pairs",
        studentsLi2: "Engagement vocal sans embarras",
        studentsLi3: "Pratique de l'enseignement pour approfondir la compréhension",
        studentsLi4: "Leçons mieux rythmées avec retour en temps réel",
        teachersTitle: "Pour les Enseignants",
        teachersLi1: "Retour immédiat et exploitable sur l'engagement",
        teachersLi2: "Multiplication de la capacité d'enseignement",
        teachersLi3: "Interventions et exercices suggérés par IA",
        teachersLi4: "Informations basées sur les données pour la planification des leçons",
        parentsTitle: "Pour les Parents",
        parentsLi1: "Suivre les progrès et l'engagement de l'enfant",
        parentsLi2: "Accès aux informations de classe",
        parentsLi3: "Environnement d'apprentissage sûr et supervisé",
        parentsLi4: "Soutien pour l'éducation différenciée",
        safeguardsTitle: "Sécurité et Garanties d'Implémentation",
        classroomOnlyTitle: "Interactions Uniquement en Classe",
        classroomOnlyLi1: "Aucune connexion à distance - toutes les activités en personne",
        classroomOnlyLi2: "Supervision de l'enseignant en permanence",
        classroomOnlyLi3: "Protocoles structurés empêchent les perturbations",
        classroomOnlyLi4: "Système de rotation empêche les problèmes de dynamique sociale",
        privacyTitle: "Confidentialité et Responsabilité",
        privacyLi1: "Suivi nominatif pour une véritable responsabilité",
        privacyLi2: "Visibilité des réponses réservée aux enseignants",
        privacyLi3: "Fonctionnement silencieux - pas de perturbation de classe",
        privacyLi4: "Analyses d'utilisation pour détecter les abus",
        challengesTitle: "Aborder les Défis Clés",
        challenge1Title: "Engagement et Honnêteté",
        challenge1Desc1: "Les élèves prendront-ils l'enseignement par les pairs au sérieux ? Le suivi nominatif peut-il encourager l'honnêteté sans pression ?",
        challenge1Desc2: "Notre approche : Gamification, protocoles structurés et validation par l'enseignant assurent une participation significative.",
        challenge2Title: "Flux en Classe",
        challenge2Desc1: "Les enseignants peuvent-ils répondre aux données en temps réel sans perturber les leçons ? Quel est le bon équilibre entre intervention immédiate et post-classe ?",
        challenge2Desc2: "Notre approche : Système de retour silencieux et actions suggérées par IA que les enseignants peuvent mettre en œuvre de manière transparente.",
        challenge3Title: "Temps et Ressources",
        challenge3Desc1: "Les périodes de 55 minutes fourniront-elles suffisamment de temps ? Comment construire une banque d'exercices complète ?",
        challenge3Desc2: "Notre approche : Micro-sessions de 10 minutes et une bibliothèque croissante d'activités différenciées prêtes à l'emploi.",
        demoTitle: "Découvrez l'Avenir de l'Apprentissage en Classe",
        demoDesc: "Demandez une démo personnalisée pour voir comment notre système à double voie peut transformer l'enseignement et l'apprentissage de votre école.",
        comingSoon: "Bientôt Disponible",
        namePlaceholder: "Prénom",
        surnamePlaceholder: "Nom de Famille",
        emailPlaceholder: "Adresse Email",
        classLevelPlaceholder: "Niveau de Classe",
        whoApplies: "Qui Applique",
        teacher: "Enseignant",
        parent: "Parent",
        student: "Élève",
        other: "Autre",
        submitDemo: "Demander une Démo"
    }
};

function switchLanguage() {
    currentLang = currentLang === 'en' ? 'fr' : 'en';
    langSwitch.textContent = currentLang === 'en' ? 'FR' : 'EN';

    const t = translations[currentLang];

    // Update hero section
    document.querySelector('.hero h1').textContent = t.heroTitle;
    document.querySelector('.hero h2').textContent = t.heroSubtitle;
    document.querySelector('.hero p').textContent = t.heroDesc;
    document.querySelector('.hero .cta-button').textContent = t.requestDemo;

    // Update solutions section
    document.querySelector('#solutions h3').textContent = t.solutionsTitle;
    const pathway1Card = document.querySelectorAll('.solution-card')[0];
    pathway1Card.querySelector('h4').textContent = t.pathway1Title;
    pathway1Card.querySelector('p').textContent = t.pathway1Desc;
    const pathway1Lis = pathway1Card.querySelectorAll('li');
    pathway1Lis[0].textContent = t.pathway1Li1;
    pathway1Lis[1].textContent = t.pathway1Li2;
    pathway1Lis[2].textContent = t.pathway1Li3;
    pathway1Lis[3].textContent = t.pathway1Li4;

    const pathway2Card = document.querySelectorAll('.solution-card')[1];
    pathway2Card.querySelector('h4').textContent = t.pathway2Title;
    pathway2Card.querySelector('p').textContent = t.pathway2Desc;
    const pathway2Lis = pathway2Card.querySelectorAll('li');
    pathway2Lis[0].textContent = t.pathway2Li1;
    pathway2Lis[1].textContent = t.pathway2Li2;
    pathway2Lis[2].textContent = t.pathway2Li3;
    pathway2Lis[3].textContent = t.pathway2Li4;

    // Update benefits section
    document.querySelector('#benefits h3').textContent = t.benefitsTitle;
    const studentsItem = document.querySelectorAll('.benefit-item')[0];
    studentsItem.querySelector('h4').textContent = t.studentsTitle;
    const studentsLis = studentsItem.querySelectorAll('li');
    studentsLis[0].textContent = t.studentsLi1;
    studentsLis[1].textContent = t.studentsLi2;
    studentsLis[2].textContent = t.studentsLi3;
    studentsLis[3].textContent = t.studentsLi4;

    const teachersItem = document.querySelectorAll('.benefit-item')[1];
    teachersItem.querySelector('h4').textContent = t.teachersTitle;
    const teachersLis = teachersItem.querySelectorAll('li');
    teachersLis[0].textContent = t.teachersLi1;
    teachersLis[1].textContent = t.teachersLi2;
    teachersLis[2].textContent = t.teachersLi3;
    teachersLis[3].textContent = t.teachersLi4;

    const parentsItem = document.querySelectorAll('.benefit-item')[2];
    parentsItem.querySelector('h4').textContent = t.parentsTitle;
    const parentsLis = parentsItem.querySelectorAll('li');
    parentsLis[0].textContent = t.parentsLi1;
    parentsLis[1].textContent = t.parentsLi2;
    parentsLis[2].textContent = t.parentsLi3;
    parentsLis[3].textContent = t.parentsLi4;

    // Update safeguards section
    document.querySelector('#safeguards h3').textContent = t.safeguardsTitle;
    const classroomItem = document.querySelectorAll('.safeguard-item')[0];
    classroomItem.querySelector('h4').textContent = t.classroomOnlyTitle;
    const classroomLis = classroomItem.querySelectorAll('li');
    classroomLis[0].textContent = t.classroomOnlyLi1;
    classroomLis[1].textContent = t.classroomOnlyLi2;
    classroomLis[2].textContent = t.classroomOnlyLi3;
    classroomLis[3].textContent = t.classroomOnlyLi4;

    const privacyItem = document.querySelectorAll('.safeguard-item')[1];
    privacyItem.querySelector('h4').textContent = t.privacyTitle;
    const privacyLis = privacyItem.querySelectorAll('li');
    privacyLis[0].textContent = t.privacyLi1;
    privacyLis[1].textContent = t.privacyLi2;
    privacyLis[2].textContent = t.privacyLi3;
    privacyLis[3].textContent = t.privacyLi4;

    // Update challenges section
    document.querySelector('#uncertainties h3').textContent = t.challengesTitle;
    const challenge1Item = document.querySelectorAll('.challenge-item')[0];
    challenge1Item.querySelector('h4').textContent = t.challenge1Title;
    const challenge1Ps = challenge1Item.querySelectorAll('p');
    challenge1Ps[0].textContent = t.challenge1Desc1;
    challenge1Ps[1].textContent = t.challenge1Desc2;

    const challenge2Item = document.querySelectorAll('.challenge-item')[1];
    challenge2Item.querySelector('h4').textContent = t.challenge2Title;
    const challenge2Ps = challenge2Item.querySelectorAll('p');
    challenge2Ps[0].textContent = t.challenge2Desc1;
    challenge2Ps[1].textContent = t.challenge2Desc2;

    const challenge3Item = document.querySelectorAll('.challenge-item')[2];
    challenge3Item.querySelector('h4').textContent = t.challenge3Title;
    const challenge3Ps = challenge3Item.querySelectorAll('p');
    challenge3Ps[0].textContent = t.challenge3Desc1;
    challenge3Ps[1].textContent = t.challenge3Desc2;

    // Update demo section
    document.querySelector('#demo h3').textContent = t.demoTitle;
    document.querySelector('#demo p').textContent = t.demoDesc;
    document.querySelector('.coming-soon').textContent = t.comingSoon;
    document.getElementById('name').placeholder = t.namePlaceholder;
    document.getElementById('surname').placeholder = t.surnamePlaceholder;
    document.getElementById('email').placeholder = t.emailPlaceholder;
    document.getElementById('class-level').placeholder = t.classLevelPlaceholder;
    document.querySelector('label[for="role"]').textContent = t.whoApplies;
    document.querySelector('option[value="teacher"]').textContent = t.teacher;
    document.querySelector('option[value="parent"]').textContent = t.parent;
    document.querySelector('option[value="student"]').textContent = t.student;
    document.querySelector('option[value="other"]').textContent = t.other;
    document.querySelector('#demo-form button').textContent = t.submitDemo;
}

langSwitch.addEventListener('click', switchLanguage);

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form submission
document.getElementById('demo-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);

    // Here you would typically send the data to your server
    alert(`Demo request submitted!\nName: ${data.name} ${data.surname}\nEmail: ${data.email}\nClass Level: ${data['class-level']}\nRole: ${data.role}`);

    // Reset form
    this.reset();
});

// Simple animation for sections on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});
