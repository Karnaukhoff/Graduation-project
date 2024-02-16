import { styled } from "styled-components";

export const Item = styled.div`
    margin: 0;
`;
export const Adv = styled.div`
    width: 270px;
    height: 441px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
`;
export const AdvImg = styled.div`
    width: 270px;
    height: 270px;
    background-color: #F0F0F0;
`;
export const AdvImgLink = styled.a``;
export const AdvPhoto = styled.img``;
export const AdvContent = styled.div``;
export const AdvContentLink = styled.a``;
export const AdvContentTitle = styled.h3`
    height: 52px;
    font-size: 22px;
    font-weight: 500;
    line-height: 26px;
    color: #009EE4;
    margin-bottom: 10px;
    margin-top: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
`;
export const AdvContentPrice = styled.p`
    color: #000000;
    font-size: 22px;
    font-weight: 500;
    line-height: 33px;
    margin-bottom: 10px;
`;
export const AdvContentPlace = styled.p`
    font-size: 16px;
    line-height: 21px;
    color: #5F5F5F;
    margin-bottom: 4px;
`;
export const AdvContentDate = styled.p`
    font-size: 16px;
    line-height: 21px;
    color: #5F5F5F;
`;