import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import content from './content.json';

const app = createApp(App);

app.use(router);

app.config.globalProperties.allContent = content;

app.mount('#app');
