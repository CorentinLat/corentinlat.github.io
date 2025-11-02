import { createApp } from 'vue';
import App from './App.vue';

import './assets/css/global.css';

import { OhVueIcon, addIcons } from 'oh-vue-icons';
import {
    AiGoogleScholarSquare,
    BiGithub,
    BiLinkedin,
    FaAward,
    FaBookReader,
    FaChalkboardTeacher,
    FaLaptopCode,
    FaSchool,
    FaUser,
    HiLocationMarker,
    MdArticleOutlined,
    MdCalendarmonth,
    MdEmailRound,
    MdEmailOutlined,
    MdLanguageRound,
    MdLibrarybooksOutlined,
    MdLinkRound,
    MdNewspaperRound,
    MdSchoolRound,
} from 'oh-vue-icons/icons';

addIcons(
    AiGoogleScholarSquare,
    BiGithub,
    BiLinkedin,
    FaAward,
    FaBookReader,
    FaChalkboardTeacher,
    FaLaptopCode,
    FaSchool,
    FaUser,
    HiLocationMarker,
    MdArticleOutlined,
    MdCalendarmonth,
    MdEmailRound,
    MdEmailOutlined,
    MdLanguageRound,
    MdLibrarybooksOutlined,
    MdLinkRound,
    MdNewspaperRound,
    MdSchoolRound,
);

const app = createApp(App);
app.component('VIcon', OhVueIcon);
app.mount('#app');
