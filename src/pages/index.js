import Loadable from "react-loadable";
import Loading from "@common/loading";

const Home  = Loadable({
    loader:()=>import("./home"),
    loading:Loading
})

const Login  = Loadable({
    loader:()=>import("./login"),
    loading:Loading
})
const Mine  = Loadable({
    loader:()=>import("./mine"),
    loading:Loading
})

const Collection  = Loadable({
    loader:()=>import("./collection"),
    loading:Loading
})
const Recommend=Loadable({
    loader:()=>import("../components/recommend"),
    loading:Loading
})

const Hot=Loadable({
    loader:()=>import("../components/hot"),
    loading:Loading
})

const Search=Loadable({
    loader:()=>import("../components/search"),
    loading:Loading
})
export {
    Home,Login,Mine,Collection,Recommend,Hot,Search
}