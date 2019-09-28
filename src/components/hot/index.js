import React, { Component } from 'react';
import {HocPot} from "./styled"
export class Hot extends Component {
    render() {
        return (
            <HocPot>
            <div className="song">
                <h2>
                <span className="red"></span>         
                <p className="recom">推荐歌单</p>
                </h2>
                <div className="six">
                    <a href="#" className="recom_li">
                    <div className="image">
                    <img src="http://p1.music.126.net/jCMaN147A051Wy3OB7UuYw==/109951164389568979.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp" alt=""/>
                    </div>
                    <span>1.8亿</span>
                    <p className="rec_txt">[VIP专享] 一周新歌推荐</p>
                    </a>
                </div>
            </div>
          
            </HocPot>
        );
    }
}

export default Hot;
