  const form = document.getElementById('contact-form');
  const feedback = document.getElementById('form-feedback')

  form.addEventListener('submit', function (event) {
    event.preventDefault(); // evita reload da página

    // Disparo do evento no dataLayer
    window.dataLayer.push({
      event: 'form_submit',
      form_name: 'contact_form',
      form_type: 'lead',
      form_location: 'page_contact'
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