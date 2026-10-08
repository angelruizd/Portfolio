// Diccionario de traducciones
const translations = {
    
    en: {
        greeting: "Hi, I'm",
        role: "Junior Web Developer & Supply Chain Troubleshooter",
        subtitle_line1: "Bridging the gap between physical operations",
        subtitle_line2: "and digital solutions.",
        about_title: "About Me",
        about_text: "Currently working as a Troubleshooter at Arvato Supply Chain in Gennep, I solve complex logistical problems under pressure. Now, I am bringing my analytical mindset to Web Development, looking for a Praktikum in Cologne starting February 2027.",
        projects_title: "Key Projects & Achievements",
        card1_title: "SAP EWM Optimization",
        card1_text: "Designed a Volumetric Picking algorithm to prioritize heavy items. Projected to increase overall productivity by 25% and reduce systemic errors by 30%.",
        card2_title: "Mental Health Web App (TFG)",
        card2_text: "Developed a scalable full-stack web application to connect users with psychologists in Spain, architected with a foundation for future international expansion.",
        contact_title: "Contact",
        btn_email: "Email Me",
        btn_cv: "Download CV"
    },
    es: {
        greeting: "Hola, soy",
        role: "Desarrollador Web Junior y Especialista en Logística",
        subtitle_line1: "Conectando las operaciones físicas",
        subtitle_line2: "con soluciones digitales.",
        about_title: "Sobre mí",
        about_text: "Actualmente trabajo como Troubleshooter en Arvato Supply Chain en Gennep, resolviendo problemas logísticos complejos bajo presión. Ahora, aporto mi mentalidad analítica al Desarrollo Web, buscando unas prácticas en Colonia a partir de febrero de 2027.",
        projects_title: "Proyectos y Logros Clave",
        card1_title: "Optimización SAP EWM",
        card1_text: "Diseño de un algoritmo de Volumetric Picking para priorizar artículos pesados. Proyectado para aumentar la productividad un 25% y reducir errores sistémicos un 30%.",
        card2_title: "Web App de Salud Mental (TFG)",
        card2_text: "Desarrollo Full-Stack de una aplicación web escalable para conectar usuarios con psicólogos en España, diseñada con bases para futura expansión internacional.",
        contact_title: "Contacto",
        btn_email: "Enviar Email",
        btn_cv: "Descargar CV"
    },
    de: {
        greeting: "Hallo, ich bin",
        role: "Junior Webentwickler & Supply Chain Troubleshooter",
        subtitle_line1: "Die Lücke zwischen physischen Abläufen",
        subtitle_line2: "und digitalen Lösungen schließen.",
        about_title: "Über mich",
        about_text: "Derzeit arbeite ich als Troubleshooter bei Arvato Supply Chain in Gennep und löse unter Druck komplexe logistische Probleme. Nun bringe ich meine analytische Denkweise in die Webentwicklung ein und suche ab Februar 2027 ein Praktikum in Köln.",
        projects_title: "Schlüsselprojekte & Erfolge",
        card1_title: "SAP EWM Optimierung",
        card1_text: "Entwurf eines Volumetric-Picking-Algorithmus zur Priorisierung schwerer Artikel. Voraussichtliche Steigerung der Gesamtproduktivität um 25 % und Reduzierung systemischer Fehler um 30 %.",
        card2_title: "Mental Health Web App (TFG)",
        card2_text: "Entwicklung einer skalierbaren Full-Stack-Webanwendung zur Vermittlung von Psychologen in Spanien, konzipiert mit einem Fundament für zukünftige internationale Expansion.",
        contact_title: "Kontakt",
        btn_email: "E-Mail senden",
        btn_cv: "Lebenslauf herunterladen"
    }
};

// Función para cambiar el idioma
function changeLanguage(lang) {
    // Buscamos todos los elementos que tengan el atributo data-i18n
    const elements = document.querySelectorAll('[data-i18n]');
    
    // Recorremos cada elemento y le cambiamos el texto según el diccionario
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}