/**
 * Created by aresn on 16/6/20.
 */
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './app.vue';
import ViewUIPlus from '../src/index';
// import locale from '../src/locale/lang/en-US';
// import locale from '../src/locale/lang/zh-CN';

// 路由配置
const router = createRouter({
    esModule: false,
    mode: 'history',
    history: createWebHistory(),
    routes: [
        {
            path: '/split',
            component: () => import('./routers/split.vue')
        },
        {
            path: '/layout',
            component: () => import('./routers/layout.vue')
        },
        {
            path: '/affix',
            component: () => import('./routers/affix.vue')
        },
        {
            path: '/anchor',
            component: () => import('./routers/anchor.vue')
        },
        {
            path: '/grid',
            component: () => import('./routers/grid.vue')
        },
        {
            path: '/button',
            component: () => import('./routers/button.vue')
        },
        {
            path: '/input',
            component: () => import('./routers/input.vue')
        },
        {
            path: '/radio',
            component: () => import('./routers/radio.vue')
        },
        {
            path: '/checkbox',
            component: () => import('./routers/checkbox.vue')
        },
        {
            path: '/steps',
            component: () => import('./routers/steps.vue')
        },
        {
            path: '/timeline',
            component: () => import('./routers/timeline.vue')
        },
        {
            path: '/switch',
            component: () => import('./routers/switch.vue')
        },
        {
            path: '/alert',
            component: () => import('./routers/alert.vue')
        },
        {
            path: '/badge',
            component: () => import('./routers/badge.vue')
        },
        {
            path: '/tag',
            component: () => import('./routers/tag.vue')
        },
        {
            path: '/input-number',
            component: () => import('./routers/input-number.vue')
        },
        {
            path: '/upload',
            component: () => import('./routers/upload.vue')
        },
        {
            path: '/progress',
            component: () => import('./routers/progress.vue')
        },
        {
            path: '/collapse',
            component: () => import('./routers/collapse.vue')
        },
        {
            path: '/carousel',
            component: () => import('./routers/carousel.vue')
        },
        {
            path: '/card',
            component: () => import('./routers/card.vue')
        },
        {
            path: '/tree',
            component: () => import('./routers/tree.vue')
        },
        {
            path: '/rate',
            component: () => import('./routers/rate.vue')
        },
        {
            path: '/circle',
            component: () => import('./routers/circle.vue')
        },
        {
            path: '/tabs',
            component: () => import('./routers/tabs.vue')
        },
        {
            path: '/tooltip',
            component: () => import('./routers/tooltip.vue')
        },
        {
            path: '/poptip',
            component: () => import('./routers/poptip.vue')
        },
        {
            path: '/slider',
            component: () => import('./routers/slider.vue')
        },
        {
            path: '/dropdown',
            component: () => import('./routers/dropdown.vue')
        },
        {
            path: '/breadcrumb',
            component: () => import('./routers/breadcrumb.vue')
        },
        {
            path: '/menu',
            component: () => import('./routers/menu.vue')
        },
        {
            path: '/spin',
            component: () => import('./routers/spin.vue')
        },
        {
            path: '/cascader',
            component: () => import('./routers/cascader.vue')
        },
        {
            path: '/select',
            component: () => import('./routers/select.vue')
        },
        {
            path: '/backtop',
            component: () => import('./routers/back-top.vue')
        },
        {
            path: '/page',
            component: () => import('./routers/page.vue')
        },
        {
            path: '/transfer',
            component: () => import('./routers/transfer.vue')
        },
        {
            path: '/date',
            component: () => import('./routers/date.vue')
        },
        {
            path: '/form',
            component: () => import('./routers/form.vue')
        },
        {
            path: '/table',
            component: () => import('./routers/table.vue')
        },
        {
            path: '/loading-bar',
            component: () => import('./routers/loading-bar.vue')
        },
        {
            path: '/modal',
            component: () => import('./routers/modal.vue')
        },
        {
            path: '/message',
            component: () => import('./routers/message.vue')
        },
        {
            path: '/notice',
            component: () => import('./routers/notice.vue')
        },
        {
            path: '/avatar',
            component: () => import('./routers/avatar.vue')
        },
        {
            path: '/color-picker',
            component: () => import('./routers/color-picker.vue')
        },
        // {
        //     path: '/auto-complete',
        //     component: (resolve) => require(['./routers/auto-complete.vue'], resolve)
        // },
        {
            path: '/scroll',
            component: () => import('./routers/scroll.vue')
        },
        {
            path: '/divider',
            component: () => import('./routers/divider.vue')
        },
        {
            path: '/time',
            component: () => import('./routers/time.vue')
        },
        {
            path: '/cell',
            component: () => import('./routers/cell.vue')
        },
        {
            path: '/drawer',
            component: () => import('./routers/drawer.vue')
        },
        {
            path: '/icon',
            component: () => import('./routers/icon.vue')
        },
        {
            path: '/list',
            component: () => import('./routers/list.vue')
        },
        {
            path: '/grid-component',
            component: () => import('./routers/grid-component.vue')
        },
        {
            path: '/description-list',
            component: () => import('./routers/description-list.vue')
        },
        {
            path: '/page-header',
            component: () => import('./routers/page-header.vue')
        },
        {
            path: '/tag-select',
            component: () => import('./routers/tag-select.vue')
        },
        {
            path: '/login',
            component: () => import('./routers/login.vue')
        }
    ]
});

const app = createApp(App);
app.use(ViewUIPlus);
app.use(router);
app.mount('#app');
export default app;
