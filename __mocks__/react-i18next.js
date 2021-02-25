const locales = require('../locales/ru.json');

function t(key) {
    return locales[key];
}

module.exports = {
    useTranslation: () => {
        return {
            t, i18n: {}
        }
    }
}

