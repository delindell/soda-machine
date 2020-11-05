import { createApp } from 'vue'
import App from './App.vue'

import fbConnection from './helpers/data/connection';

// calling this function on application launch to connect us to the database

fbConnection();

createApp(App).mount('#app')
