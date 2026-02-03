var exec = require('cordova/exec');

/**
 * Plugin para overlay transparente nativo
 */
var TransparentOverlay = {
    
    /**
     * Iniciar el overlay transparente
     * @param {string} htmlUrl - URL del HTML a mostrar
     * @param {function} success - Callback éxito
     * @param {function} error - Callback error
     */
    start: function(htmlUrl, success, error) {
        if (!htmlUrl) {
            htmlUrl = 'overlay-plushies.html';
        }
        
        exec(success, error, 'TransparentOverlay', 'start', [htmlUrl]);
    },
    
    /**
     * Detener el overlay
     * @param {function} success - Callback éxito
     * @param {function} error - Callback error
     */
    stop: function(success, error) {
        exec(success, error, 'TransparentOverlay', 'stop', []);
    },
    
    /**
     * Verificar si el overlay está activo
     * @param {function} success - Callback éxito
     * @param {function} error - Callback error
     */
    isActive: function(success, error) {
        exec(success, error, 'TransparentOverlay', 'isActive', []);
    },
    
    /**
     * Actualizar contenido del overlay
     * @param {string} htmlContent - Contenido HTML
     * @param {function} success - Callback éxito
     * @param {function} error - Callback error
     */
    updateContent: function(htmlContent, success, error) {
        exec(success, error, 'TransparentOverlay', 'updateContent', [htmlContent]);
    },
    
    /**
     * Mostrar/ocultar peluches específicos
     * @param {object} plushieConfig - Configuración de peluches
     * @param {function} success - Callback éxito
     * @param {function} error - Callback error
     */
    updatePlushies: function(plushieConfig, success, error) {
        exec(success, error, 'TransparentOverlay', 'updatePlushies', [plushieConfig]);
    }
};

module.exports = TransparentOverlay;
