/*부트스트랩을 위해서 2개의 모듈이 import 되어야함
모듈을 로딩할 때 './ 가 없는 이유는
node_modules 폴더에 있는 모듈은 그냥 모듈명으로 시작
따로 경로 지정 x */
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//import * as VueCSSPin from 'vue-csspin';
//글로벌 등록

const app = createApp(App)

app.use(router)

app.mount('#app')
