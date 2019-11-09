import Vue from "vue";
import Router from "vue-router";

//import page components
Vue.use(Router);

const router = new Router({
    mode: "history",
    routes: [{
            path: "/",
            name: "",
            redirect: "/index"
        },
        {
            path: "*",
            name: "*",
            redirect: "/"
        },
        {
            path: "/index",
            name: "index",
            component: () => import("../view"),
            children: [{
                    path: 'shitu1',
                    name: 'shitu1',
                    component: () => import("../view/shitu1"),
                },
                {
                    path: 'shitu2',
                    name: 'shitu2',
                    component: () => import("../view/shitu2"),
                }
            ]
        }, {
            path: "/buy",
            name: "buy",
            component: () => import("../view/buy"),
            redirect: "/buy/haha1", //默认展示11111
            children: [{
                    path: 'haha1',
                    name: 'haha1',
                    component: () => import("../view/shitu1"),
                },
                {
                    path: 'haha2',
                    name: 'haha2',
                    component: () => import("../view/shitu2"),
                }
            ]
        }, {
            path: '/shitu1-out',
            name: 'shitu1-out',
            component: () => import("../view/shitu1"),
        },
        {
            path: '/shitu2-out',
            name: 'shitu2-out',
            component: () => import("../view/shitu2"),
        },


    ]
})

export {
    router
}