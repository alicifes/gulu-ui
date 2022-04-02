import Dialog from './Dialog.vue';
import {createApp, h} from 'vue';


export const openDialog = (options) => {
  const {title, content,ok,cancel} = options;
  const div = document.createElement('div');
  document.body.appendChild(div);
  const cloes = () => {
    // @ts-ignore
    app.unmount(div);
    div.remove();
  };
  const app = createApp({
    render() {
      return h(Dialog, {
        visible: true, 'onUpdate:visible': (newVisible) => {
          if (newVisible === false) {
            cloes();
          }
        },ok,cancel
      }, {title, content});
    }
  });
  //const app = createApp(Dialog,{visible:true});
  app.mount(div);
};
