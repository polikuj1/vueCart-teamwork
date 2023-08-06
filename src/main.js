import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


//引入viewFire
import { VueFire, VueFireAuth } from 'vuefire'
import { firebaseApp } from './firebase'

//aos引入
import AOS from 'aos'
import 'aos/dist/aos.css'
// ajax引入
import axios from 'axios'
import VueAxios from 'vue-axios'
// fontIcon引入
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
//外部函式庫 view-ui-plus
import ViewUIPlus from 'view-ui-plus'
import 'view-ui-plus/dist/styles/viewuiplus.css'
// 字體引入
import "@/assets/fonts/font.css"
// 封裝圖片路徑
import Images from '@/components/Images.vue'
// 全域樣式
import "@/assets/scss/_style.scss"
// 打API用的路徑變數
import { URL } from '@/assets/js/common.js'


AOS.init({
    duration: 1000,
    
});
const app = createApp(App)
app.config.globalProperties.$URL = URL;

app.use(VueFire, {
    firebaseApp,
    modules: [
    
      VueFireAuth(),
    ]
  })




app.use(store)
app.use(router)
app.use(ViewUIPlus)
app.use(AOS)
app.use(VueAxios,axios)
app.component('Images', Images)
app.mount('#app')

