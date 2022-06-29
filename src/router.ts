import { createWebHashHistory, createRouter } from "vue-router";
import Home from "./views/Home.vue";
import Doc from "./views/Doc.vue";
import SwitchDemo from "./components/SwitchDemo.vue";
import ButtonDemo from "./components/ButtonDemo.vue";
import DialogDemo from "./components/DialogDemo.vue";
import TabsDemo from "./components/TabsDemo.vue";
<<<<<<< HEAD
=======
import DocDemo from "./components/DocDemo.vue";
import { h } from 'vue';
import Markdown from './components/Markdown.vue';
>>>>>>> 6f3b1a8f79bf83485677576aa42e989d3ef0cd50

import { h } from 'vue';
import Markdown from './components/Markdown.vue';
const md = filename => h(Markdown, { path: `../markdown/${filename}.md`, key: filename })
const history = createWebHashHistory();
const md = filename => h(Markdown, { path: `../markdown/${filename}.md`, key: filename })
export const router = createRouter({
    history: history,
    routes: [
        { path: "/", component: Home },
        {
            path: "/doc",
            component: Doc,
            children: [
<<<<<<< HEAD
                { path: "", redirect: '/doc/intro' },
                { path: "intro", component: md('intro') },
                { path: "get-started", component: md('get-started') },
                { path: "install", component: md('install') },
=======
                { path: "", component: DocDemo },
>>>>>>> 6f3b1a8f79bf83485677576aa42e989d3ef0cd50
                { path: "switch", component: SwitchDemo },
                { path: "button", component: ButtonDemo },
                { path: "dialog", component: DialogDemo },
                { path: "tabs", component: TabsDemo },
            ],
        },
    ],
});
router.afterEach(() => {
    console.log("路由切换了");
});
