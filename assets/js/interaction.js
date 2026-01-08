
const fields = document.querySelectorAll('#contact-form input, #contact-form textarea');

fields.forEach(field => {
    field.addEventListener('input', () => {

        window.dataLayer.push({
            event: 'interacao',
            custom_section: 'contact',
            custom_type: 'field',
            custom_title: field.name || field.id
        });

        console.log('interação enviada:', field.name || field.id);

    });
});