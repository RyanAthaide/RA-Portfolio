  const form = document.getElementById('contact-form');
  const feedback = document.getElementById('form-feedback')

// Captura de interacao ao formulario
  let startForm = false;

  form.addEventListener('input', () => {
    if (!startForm) {
      startForm = true;

      window.dataLayer.push({
        event: 'form_start',
        custom_section: 'contact',
        custom_type: 'lead',
        custom_title: 'start_fill'
      });

      console.log("form_start enviado!")
    }
  });


// Captura do formulario enviado
  form.addEventListener('submit', function (event) {
    event.preventDefault(); // evita reload da página

    // Disparo do evento no dataLayer
    window.dataLayer.push({
      event: 'callback',
      custom_section: 'contact',
      custom_type: 'lead',
      custom_title: 'contact_me'
    });

    console.log('Evento enviado para o dataLayer');


    
     // Mostrar feedback
  feedback.classList.remove('hidden');
  feedback.classList.add('show');

  // Esconder após 3s
  setTimeout(() => {
    feedback.classList.remove('show');
    feedback.classList.add('hidden');
  }, 3000);

   // Limpa o formulário
  form.reset();

  });

