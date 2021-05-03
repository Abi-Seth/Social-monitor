import { createApp } from 'vue'
import App from './App.vue'
import store from './store/index'
import router from './routes'
// import app from './background'
// import { ipcMain } from 'electron'

createApp(App)
    .use(router)
    .use(store)
    .mount('#app')


// ipcMain.on('closeapp', () => {
//     // vueApp.destory();
//     app.quit()
// })