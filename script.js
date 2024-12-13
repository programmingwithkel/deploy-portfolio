let text = document.getElementById('text');
let treeRight = document.getElementById('tree-right');
let treeLeft = document.getElementById('tree-left');
let gateRight = document.getElementById('gate-right');
let gateLeft = document.getElementById('gate-left');


window.addEventListener('scroll', () => {
    let value = window.scrollY;

    
        text.style.marginTop = value * 2.5 + 'px';
        treeRight.style.left = value * 1.5 + 'px';
        treeLeft.style.left = value * -1.5 + 'px';
        gateRight.style.left = value * -0.5 + 'px';
        gateLeft.style.left = value * 0.5 + 'px';
    
    
});


const navLinks = document.querySelectorAll('.navigation a');


navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        
        e.preventDefault();
        
       
        navLinks.forEach(nav => nav.classList.remove('Active'));

        
        link.classList.add('Active');
        
        
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});


const sections = document.querySelectorAll('section');
const removeActiveClasses = () => {
    navLinks.forEach(link => link.classList.remove('Active'));
};

const addActiveClass = (id) => {
    const activeLink = document.querySelector(`.navigation a[href="#${id}"]`);
    if (activeLink) {
        activeLink.classList.add('Active');
    }
};


const observerOptions = {
    root: null, 
    threshold: 0.6, 
};

const observerCallback = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            removeActiveClasses();
            addActiveClass(entry.target.id);
        }
    });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);


sections.forEach(section => observer.observe(section));


document.addEventListener("DOMContentLoaded", () => {
    const aboutParagraph = document.querySelector(".about-info p");

  
    const paragraphText = aboutParagraph.textContent;
    aboutParagraph.innerHTML = ""; 

    paragraphText.split("").forEach((letter, index) => {
        const span = document.createElement("span");
        span.textContent = letter === " " ? "\u00A0" : letter; 
        span.style.animationDelay = `${index * 0.05}s`; 
        aboutParagraph.appendChild(span);
    });

   
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const spans = aboutParagraph.querySelectorAll("span");
                spans.forEach((span) => span.classList.add("active"));
            }
        });
    }, {
        threshold: 0.5 
    });

    observer.observe(aboutParagraph); 
});

document.addEventListener("DOMContentLoaded", () => {
    const aboutHeading = document.querySelector(".about-info h1");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                aboutHeading.classList.add("active"); 
            }
        });
    }, {
        threshold: 0.1 
    });

    observer.observe(aboutHeading);
});

document.addEventListener('DOMContentLoaded', () => {
    const initializeFlipEffect = (selector) => {
        const boxes = document.querySelectorAll(selector);

        boxes.forEach(box => {
            const flipCard = () => {
                boxes.forEach(b => b.classList.remove('flipped'));
                box.classList.add('flipped');
            };

            const unflipCard = () => {
                box.classList.remove('flipped');
            };

            
            box.addEventListener('click', flipCard);
            box.addEventListener('blur', unflipCard);
            box.addEventListener('mouseenter', flipCard);
            
            

            box.setAttribute('tabindex', '0');
        });
    };

    
    initializeFlipEffect('.family-box');
    initializeFlipEffect('.gallery-box');
});

document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const mobileMenu = document.createElement('div');

   
    mobileMenu.id = 'mobile-navigation';
    mobileMenu.innerHTML = `
        <div class="mobile-menu-overlay">
            <nav class="mobile-menu-content">
                <button class="close-menu">&times;</button>
                <ul>
                    <li><a href="#home" data-section="home">Home</a></li>
                    <li><a href="#about" data-section="about">About</a></li>
                    <li><a href="#services" data-section="services">Services</a></li>
                    <li><a href="#family" data-section="family">Family</a></li>
                    <li><a href="#gallery" data-section="gallery">Gallery</a></li>
                    <li><a href="#contact" data-section="contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    `;

  
    document.body.appendChild(mobileMenu);

    
    menuIcon.addEventListener('click', () => {
        mobileMenu.classList.add('active');
    });

    
    function closeMenu() {
        mobileMenu.classList.remove('active'); 
    }

   
    mobileMenu.querySelector('.close-menu').addEventListener('click', closeMenu);

    
    mobileMenu.querySelector('.mobile-menu-overlay').addEventListener('click', (e) => {
        if (e.target === e.currentTarget) {
            closeMenu();
        }
    });

    
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeMenu);
    });
});
