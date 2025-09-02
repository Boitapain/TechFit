import { register, init, getLocaleFromNavigator } from 'svelte-i18n';

register('en', () => import('./en.json'));
register('fr', () => import('./fr.json'));
register('es', () => import('./es.json'));

// Get saved language from localStorage or fall back to browser language
const getSavedLocale = () => {
    if (typeof window !== 'undefined') {
        const saved = localStorage.getItem('language');
        if (saved && ['en', 'fr', 'es'].includes(saved)) {
            return saved;
        }
    }
    return getLocaleFromNavigator();
};

init({
    fallbackLocale: 'en',
    initialLocale: getSavedLocale()
});