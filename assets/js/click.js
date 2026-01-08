
// Capturar clique no button 'send message' do formulario
const tagButton = document.querySelector(".btn-input");

tagButton.addEventListener('click', () => {
    
    window.dataLayer.push({
      event: 'click',
      custom_section: 'contact',
      custom_type: 'button',
      custom_title: 'send-message'
    });

    console.log("Evento de clique enviado: send_message");
});