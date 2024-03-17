import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from './views/HomeView.vue';
import MailSendView from './views/MailSendView.vue';


// Définition des routes
const routes = [
  { path: '/', component: HomeView },
  { path: '/mailsend', component: MailSendView }
];

// Création de l'instance du routeur avec les routes définies ci-dessus,
// en utilisant l'historique du navigateur Web
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Création et montage de l'application Vue avec le routeur
const app = createApp(App);
app.use(router);
app.mount('#app');
