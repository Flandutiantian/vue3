import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createWebHashHistory, createRouter } from "vue-router";
import Sonia from "./components/Sonia.vue";
import Sonia2 from './components/Sonia2.vue'

const history = createWebHashHistory();
const router = createRouter({
    history: history,
    routes: [
        { path: "/", component: Sonia },
        { path: "/xxx", component: Sonia2 },
    ],
});
const app = createApp(App)
app.use(router)
app.mount('#app')