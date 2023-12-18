import { createApp } from 'vue'
import './style.css'
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'

// 未优化前
// import App from './PerformanceTestBeforeOptimize.vue'
// 优化方式1
// import App from './PerformanceTestAfterOptimize.vue'
// 优化方式2
import App from './PerformanceTestAfterOptimize2.vue'
// el-checkbox不需要使用slot的情况下，使用slot和非slot的性能差异
// import App from './PerformanceTestBeforeOptimizeSlotTest.vue'

const app = createApp(App)
app.config.performance = true
app.use(ElementPlus).mount('#app')
