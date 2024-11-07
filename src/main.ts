import { createApp } from 'vue';
import App from './App.vue';

import './assets/css/global.css';

import { OhVueIcon, addIcons } from 'oh-vue-icons';
import { AiGoogleScholarSquare, BiGithub, BiLinkedin, HiLocationMarker, MdEmailOutlined } from "oh-vue-icons/icons";

import 'vue-fullpage.js/dist/style.css';
import VueFullPage from 'vue-fullpage.js';

addIcons(AiGoogleScholarSquare, BiGithub, BiLinkedin, HiLocationMarker, MdEmailOutlined);

const app = createApp(App);
app.component('VIcon', OhVueIcon);
app.use(VueFullPage);
app.mount('#app');
