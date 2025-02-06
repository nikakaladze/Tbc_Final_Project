export const i18n = {
    locales: [
        { code: 'en-US', name: 'English', icon: '🇺🇸' },
        { code: 'ka', name: 'georgia', icon: 'ka' },
    ],
    defaultLocale: 'en-US',
}

export const getDirection = (locale: string) => {
    return locale === 'ka' ? 'rtl' : 'ltr'
}
export type I18nConfig = typeof i18n
export type Locale = I18nConfig['locales'][number]