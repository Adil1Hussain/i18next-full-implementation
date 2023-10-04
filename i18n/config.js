export const languages = ['en', 'de','hi']

export const defaultLanguage = 'en'

export const changeLanguage =(lng) =>{
    defaultLanguage=lng;
};
export const setDefaultLanguageFromPath = () => {
    const pathSegments = window.location.pathname.split('/');
    const languageFromPath = pathSegments[1]; // Assuming language code is the first segment
    if (languages.includes(languageFromPath)) {
      defaultLanguage = languageFromPath;
    }
  };

// Locale files under /src/locales/[lang]/
export const namespaces = ['common', 'meta', 'error']

export const defaultNamespace = 'common'
