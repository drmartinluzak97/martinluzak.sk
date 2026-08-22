document.addEventListener('DOMContentLoaded', () => {
    // --- 1. Konštanty pre prepínanie jazykov a hamburger ---
    const langButtons = document.querySelectorAll('.language-switcher button');
    const contentElements = document.querySelectorAll('[data-lang]');
    const navItems = document.querySelectorAll('.nav-item');
    const htmlTag = document.documentElement;
    
    const hamburger = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links'); // Menu, ktoré sa rozbaľuje


    // --- 2. FUNKCIA: Prepínanie jazyka ---
    const switchLanguage = (langCode) => {
        
        // Aktualizácia atribútu 'lang' v HTML tagu
        htmlTag.setAttribute('lang', langCode);

        // Prepínanie viditeľnosti obsahu
        contentElements.forEach(element => {
            if (element.getAttribute('data-lang') === langCode) {
                // Používame removeProperty, aby sme prekonali inline štýl display: none
                element.style.removeProperty('display'); 
            } else {
                element.style.display = 'none'; // Skryje element
            }
        });

        // Aktualizácia textu navigačných položiek
        navItems.forEach(item => {
            const newText = item.getAttribute(`data-lang-${langCode}`);
            if (newText) {
                item.textContent = newText;
            }
        });

        // Aktualizácia aktívneho stavu tlačidiel
        langButtons.forEach(button => {
            if (button.id === `${langCode}-lang-btn`) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });

        // Uloženie vybraného jazyka
        localStorage.setItem('selectedLanguage', langCode);
    };


    // --- 3. EVENT LISTENERY ---
    
    // Listener pre tlačidlá jazykov
    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            const langCode = button.id.split('-')[0];
            switchLanguage(langCode);
        });
    });

    // Listener pre hamburger menu (NOVINKA)
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            // Prepne triedu, ktorá zobrazí/skryje menu na mobile
            navLinks.classList.toggle('active'); 
            // Voliteľne, ak chceš zmeniť ikonu (napr. z ☰ na X)
            // hamburger.classList.toggle('is-open'); 
        });
    }

    // --- 4. Inicializácia pri načítaní stránky ---
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage) {
        switchLanguage(savedLanguage);
    } else {
        switchLanguage('sk'); // Predvolený jazyk
    }
});