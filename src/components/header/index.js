import React, { Component } from 'react';
import {HEADER} from "./styled"
export class Header extends Component {
    render() {
        return (
            <HEADER>
                <h1 className="topf1">
                    <span className="iconfont">&#xe602;</span>
                    <i>网易云音乐</i>
                </h1>
                <div className="topf2">
                    <span>下载APP</span>
                </div>
            </HEADER>
        );
    }
}

export default Header;
