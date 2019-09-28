import styled from "styled-components"

export const HocPot=styled.div`
    width:100%;
    height:100%;
    .song{
        width:100%;
        margin-top:.4rem;
        h2{
            height:.4rem;
            line-height:.4rem;
            width:7.32rem;
            font-size:30px;
            margin-bottom:.18rem;
            .red{
            display:block;
            width:.04rem;
            height:.4rem;
            line-height:.4rem;
            background:red;
            margin-right:.18rem;
            float:left;
            }
            .recom{
                float:left;
                height:.4rem;
                line-height:.4rem;
            }
        }
        .six{
            width:100%;
            height:7.48rem;
            margin-bottom:.48rem;
            .recom_li{
                width:33.3%;
                display:block;
                float:left;
                box-sizing:border-box;
                padding-right:.04rem;
                text-decoration:none;
                margin-bottom:.48rem;
            }
            .rec_txt{
                width:2.3rem;
                height:.6rem;
                padding:.12rem .04rem 0 .12rem;
                overflow:hidden;
            }
        }
    }


`