       AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
            mirror: false
        });
        
        const header = document.getElementById('header');
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
        
        // mobile nav
        const navToggle = document.getElementById('nav-toggle');
        const navClose = document.getElementById('nav-close');
        const navList = document.getElementById('nav-list');
        
        navToggle.addEventListener('click', () => {
            navList.classList.add('show');
        });
        
        navClose.addEventListener('click', () => {
            navList.classList.remove('show');
        });
        
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navList.classList.remove('show');
            });
        });
        
        const sections = document.querySelectorAll('section[id]');
        
        function scrollActive() {
            const scrollY = window.pageYOffset;
            
            sections.forEach(current => {
                const sectionHeight = current.offsetHeight;
                const sectionTop = current.offsetTop - 50;
                const sectionId = current.getAttribute('id');
                
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    document.querySelector('.nav-link[href*=' + sectionId + ']').classList.add('active');
                } else {
                    document.querySelector('.nav-link[href*=' + sectionId + ']').classList.remove('active');
                }
            });
        }
        
        window.addEventListener('scroll', scrollActive);
        
        // Menu Tabs
        const menuTabs = document.querySelectorAll('.menu-tab');
        
        menuTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                menuTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                
                // Demo lang 'to
                console.log(`Tab selected: ${tab.textContent}`);
            });
        });
        
        const contactForm = document.getElementById('contactForm');
        
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // demo
            console.log('Form submitted:', { name, email, subject, message });
            
            alert('Thank you for your message! We will get back to you soon.');
            
            contactForm.reset();
        });
        
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 70,
                        behavior: 'smooth'
                    });
                }
            });
        });
