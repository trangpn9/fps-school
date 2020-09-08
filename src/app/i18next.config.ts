import { ITranslationService, I18NEXT_SERVICE, I18NextModule, defaultInterpolationFormat } from 'angular-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import sprintf from 'i18next-sprintf-postprocessor';
import { APP_INITIALIZER, LOCALE_ID } from '@angular/core';

export function appInit(i18next: ITranslationService) {    
    return () => i18next
    .use(Backend)
    .use(LanguageDetector)
    .use(sprintf)
    .init({
        whitelist: ['vn', 'en'],
        fallbackLng: 'vn',
        debug: false,
        returnEmptyString: false,
        ns: [
          'translation',                   
        ],
        interpolation: {
            format: I18NextModule.interpolationFormat(defaultInterpolationFormat)
        },
        backend: {
            loadPath: 'assets/locales/{{lng}}.{{ns}}.json',
        },
        // lang detection plugin options
        detection: {
            // order and from where user language should be detected
            order: ['querystring', 'cookie'],

            // keys or params to lookup language from
            lookupCookie: 'lang',
            lookupQuerystring: 'lng',

            // cache user language on
            caches: ['localStorage', 'cookie'],

            // optional expire and domain for set cookie
            cookieMinutes: 10080, // 7 days
        }
    });
}
 
export function localeIdFactory(i18next: ITranslationService)  {
    return i18next.language;
}
 
export const I18N_PROVIDERS = [
{
    provide: APP_INITIALIZER,
    useFactory: appInit,
    deps: [I18NEXT_SERVICE],
    multi: true
},
{
    provide: LOCALE_ID,
    deps: [I18NEXT_SERVICE],
    useFactory: localeIdFactory
}];