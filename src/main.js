import { createApp } from 'vue'
import App from './App.vue'

import fbConnection from './helpers/data/connection';

fbConnection();

createApp(App).mount('#app')
