// Validación del formulario de contacto
(function() {
    'use strict'
    
    const form = document.getElementById('contactoForm')
    
    form.addEventListener('submit', function(event) {
        if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
        } else {
            event.preventDefault()
            // Mostrar modal de confirmación
            const modal = new bootstrap.Modal(document.getElementById('modalConfirmacionContacto'))
            modal.show()
            // Limpiar formulario después de enviar
            form.reset()
            form.classList.remove('was-validated')
        }
        
        form.classList.add('was-validated')
    }, false)
})()