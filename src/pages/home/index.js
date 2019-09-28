import React, { Component ,Fragment} from 'react';
import {HomeWrapper} from "./styled"
import Header from "../../components/header"
// import {PageContainer} from "../../globalStyled"
// import qs from "qs"
// import axios from "axios";
import {Link} from "react-router-dom"
class Home extends Component {
    render() {
        return (
           <Fragment>
            <Header/>
            <HomeWrapper>
              
                    <nav className="three">
                        <li href=""><div className="same"><Link to="/home/recommend">推荐音乐</Link></div></li>
                        <li href=""><div className="same"><Link to="/home/hot">热歌榜</Link></div></li>
                        <li href=""><div className="same"><Link to="/home/search">搜索</Link></div></li>         
                    </nav>
                <div></div>
           
            </HomeWrapper>
            </Fragment>
        );
    }

}


export default Home;