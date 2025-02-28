import 'next-i18next';

declare module 'next-i18next' {
  interface DefaultNamespaces {
    header: typeof import('../public/locales/en/header.json');
  }
}