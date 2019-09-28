import styled from "styled-components"
export const HEADER=styled.div`
        position: fixed;
        top: 0;
        left: 0;
        z-index: 100;
        display:flex;
        justify-content: space-between;
        justify-content:center;
        align-items:center;
        padding:0  0.2rem;
        width:100%;
        height:1.68rem;
        background-color: #d43c33;
        h1{
            width:2.84rem;
            height:.5rem;
            font-weight:400;
            left:0;
            line-height:.5rem;
            position:absolute;
                span{
                    font-size:50px;
                    display:inline-block;
                    color:white;
                    margin-right:.02rem;
                    margin-left:.2rem;
                }
                i{
                    font-style:normal;
                    font-size:40px;
                    color:white;
                    margin-left:.08rem;
                }
            }
        .topf2{
            width:2rem;
            height:.72rem;
            border:0.02rem;
            right:.22rem;
            position:absolute;
            span{
                display:inline-block;
                width:2rem;
                line-height: .72rem;
                font-size: 34px;
                text-align: center;
                color: #d43c33;
                background-color: #fff;
                border-radius: 37.5%/100%;
            }
        }

`
