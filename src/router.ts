//@ts-nocheck
import {createWebHashHistory,createRouter} from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import DialogDemo from './components/DialogDemo.vue'
import TabsDemo from './components/TabsDemo.vue'
import Markdown from '../src/components/Markdown.vue'
import intro from '../src/markdown/intro.md'
import getStarted from '../src/markdown/get-started.md'
import install from '../src/markdown/install.md'
import {h} from 'vue';


const history = createWebHashHistory();
const md =(string,key)=> h(Markdown,{content:string,key})

export const router = createRouter({
  history,
  routes:[
    {path:'/',component:Home},
    {path:'/doc',component:Doc,children:[
        {path:'',redirect:"/doc/intro"},
        {path:'intro',component:md(intro,"intro")},
        {path:'get-started',component:md(getStarted,"get-started")},
        {path:'install',component:md(install,"install")},
        {path:'switch',component:SwitchDemo},
        {path:'button',component:ButtonDemo},
        {path:'dialog',component:DialogDemo},
        {path:'tabs',component:TabsDemo}
      ]}

  ]
});
router.afterEach(()=>{
})