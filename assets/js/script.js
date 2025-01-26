const menuIcon = document.querySelector('#menu');
const navLinks = document.querySelector('.nav-links');

// Função para abrir e fechar a navbar
menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
    menuIcon.classList.toggle('fa-times');
};

// Função para fechar a navbar ao clicar fora dela
document.addEventListener('click', (event) => {
    if (!navLinks.contains(event.target) && !menuIcon.contains(event.target)) {
        navLinks.classList.remove('active');
        menuIcon.classList.remove('fa-times');
    };
});

// animation text
const phrases = ["FrontEnd Developer"];
let phraseIndex = 0;
let charIndex = 0;
const speed = 120;
const delayBetweenPhrases = 1000;
const typingElement = document.getElementById("typing-text");

typingElement.classList.add("typing");

function addCharacter() {
    typingElement.textContent += phrases[phraseIndex].charAt(charIndex);
};
function typeWriter() {
    if (charIndex < phrases[phraseIndex].length) {
        addCharacter();
        charIndex++;
        setTimeout(typeWriter, speed);
    };
}
function startAnimation() {
    typeWriter();
}
window.onload = startAnimation;


// add links aos buttons
const btnGithub = document.querySelectorAll('.github, .btn-github');

btnGithub.forEach(div => {
    div.addEventListener('click', () => {
        window.open('https://github.com/RyanAthaide', '_blank');
    });
});

document.getElementById('download-cv').addEventListener('click', () => {
    const link = document.createElement('a');
    link.href = 'assets/cv/RyanAthaide-CV.pdf';
    link.download = 'RyanAthaide-CV.pdf';
    link.click();

});

// função link para meu whatsapp
document.getElementById('contact-wpp').addEventListener('click', () => {
    const phoneNumber = '5511963101372';
    const message = 'Olá, Podemos conversar?';

    const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
})

// função btn fixos

document.addEventListener('DOMContentLoaded', function () {
    // Ajusta para garantir que o site comece no topo ao recarregar
    if (window.location.hash !== '#inicio') {
        window.location.hash = '#inicio';
    }

    const backToTopButton = document.getElementById('backToTop');
    const whatsappButton = document.getElementById('whatsappButton');

    // Função para exibir ou esconder os botões ao rolar a página
    function toggleButtons() {
        const scrollPosition = window.scrollY;
        if (scrollPosition > 100) {
            backToTopButton.style.display = 'flex';
            whatsappButton.style.display = 'flex';
            setTimeout(() => {
                backToTopButton.style.opacity = '1';
                whatsappButton.style.opacity = '1';
            }, 10);
        } else {
            backToTopButton.style.opacity = '0';
            whatsappButton.style.opacity = '0';
            setTimeout(() => {
                backToTopButton.style.display = 'none';
                whatsappButton.style.display = 'none';
            }, 500);
        }
    }

    // Adiciona o evento de scroll para exibir ou esconder os botões
    document.addEventListener('scroll', toggleButtons);

    // Ação ao clicar no botão "Voltar ao Topo"
    backToTopButton.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Ação ao clicar no botão do WhatsApp
    document.getElementById('whatsappButton').addEventListener('click', () => {
        const phoneNumber = '5511963101372';
        const message = 'Olá, Podemos conversar?';

        const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
        window.open(whatsappLink, '_blank');
    })
});

