//css最小引用原则，不能影响到别的css
import './lib/gulu.scss';
import './index.scss';
import { createApp } from 'vue'
import App from './App.vue'
import {router} from './router';


const app = createApp(App);
app.use(router);
app.mount('#app');