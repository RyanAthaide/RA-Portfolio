// api para envio de formularios

class {
    constructor(settings) {
        this.settings = settings;
        this.form = document.querySelector(settings.form);
        this.formButton = document.querySelector(settings.formButton);
        if (this.form) {
            this.url = this.form.getAttribute('action');
        }
    }

    displaySuccess() {
        this.form.innerHTML = this.settings.success
    }

    displayError() {
        this.form.innerHTML = this.settings.error
    }

    init() {
        
    }
}
