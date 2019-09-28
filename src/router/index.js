import{
    Home,Login,Mine,Collection,Recommend,Hot,Search
} from "@pages"

export const layoutRoutes=[
    {
        key:"/home",
        path:"/home",
        name:"首页",
        icon:"\ue506",
        component:Home,
        exact:true,
        meta:{
            requireAuth: false,
            flag:true
        },
        children:[
            {
                key:"/home/recommend",
                path:"/home/recommend",
                name:"推荐音乐",
                component:Recommend,
              
                meta:{
                    flag:true
                }
            },
            {
                key:"/home/hot",
                path:"/home/hot",
                name:"热歌榜",
                component:Hot,
                meta:{
                    flag:true
                }
            },
            {
                key:"/home/hot",
                path:"/home/hot",
                name:"热歌榜",
                component:Hot,
                meta:{
                    flag:true
                }
            },
            {
                key:"/home/search",
                path:"/home/search",
                name:"搜索",
                component:Search,
                meta:{
                    flag:true
                }
            }
        ]
            
        
    },
    
    {
        key:"/collection",
        path:"/collection",
        name:"收藏",
        icon:"\ue63a",
        component:Collection,
        exact:true,
        meta:{
            requireAuth: true,
            flag:true
        }
    },
    {
        key:"/mine",
        path:"/mine",
        name:"我的",
        icon:"\ue507",
        component:Mine,
        exact:true,
        meta:{
            requireAuth: false,
            flag:true
        }
    },
]

export const noLayoutRoutes = [
    {
        key: "/login",
        path: "/login",
        name: "登录",
        icon: "",
        component: Login,
        exact: true,
        meta: {
            requireAuth: false
        }
    }
]

export const baseConfigRoutes = layoutRoutes.concat(noLayoutRoutes);