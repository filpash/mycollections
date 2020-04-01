import { englishMessages } from 'admin-on-rest';
import russianMessages from 'aor-language-russian';

import customRussianMessages from './ru';
import customEnglishMessages from './en';

export default {
    ru: { ...russianMessages, ...customRussianMessages },
    en: { ...englishMessages, ...customEnglishMessages },
};
