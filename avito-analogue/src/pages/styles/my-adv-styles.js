import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  background-color: #ffffff;
`;
export const MainContainer = styled.div`
  max-width: 1178px;
  margin: 0 auto;
  padding: 0px 10px 79px;
`;
export const MainArtic = styled.div`
  max-width: 1178px;
  padding: 0 0 70px;
  margin: 0 auto;
  padding: 0 5px 70px;
`;
export const ArticContent = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: top;
  -ms-flex-align: top;
  align-items: top;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
`;
export const ArticLeft = styled.div`
  max-width: 480px;
  margin-right: 54px;
`;
export const ArticFillImg = styled.div`
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`;
export const ArticImgBlock = styled.div`
  width: 480px;
  height: 480px;
  background-color: #f0f0f0;
  margin: 0 5px;
`;
export const ArticImgBar = styled.div`
  margin-top: 30px;
  width: 490px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: left;
  -ms-flex-pack: left;
  justify-content: left;
  overflow: hidden;
  margin-left: -5px;
`;
export const ArticImgBarDiv = styled.div`
  width: 88px;
  min-width: 88px;
  height: 88px;
  background-color: #f0f0f0;
  border: 2px solid #f0f0f0;
  margin: 0 5px;
`;
export const ArticImgBarDivPicture = styled.img`
  width: 100%;
  height: auto;
  display: block;
  -o-object-fit: cover;
  object-fit: cover;
`;
export const ArticRight = styled.div`
  max-width: 621px;
`;
export const ArticBlock = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
`;
export const ArticTitle = styled.h3`
  margin-bottom: 10px;
  font-size: 32px;
`;
export const ArticInfo = styled.div`
  margin-bottom: 34px;
`;
export const ArticDate = styled.p`
  font-size: 16px;
  line-height: 21px;
  color: #5f5f5f;
  margin-bottom: 4px;
`;
export const ArticCity = styled.p`
  font-size: 16px;
  line-height: 21px;
  color: #5f5f5f;
  margin-bottom: 4px;
`;
export const ArticLink = styled.a`
  font-size: 16px;
  line-height: 21px;
  color: #009ee4;
`;
export const ArticPrice = styled.p`
  font-size: 28px;
  line-height: 39px;
  font-weight: 700;
  margin-bottom: 20px;
`;
export const ArticleBtnBlock = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
        flex-wrap: wrap;
`;
const ArticleBtns = `
    background-color: #009EE4;
    border-radius: 6px;
    border: 1px solid #009EE4;
    height: 50px;
    font-size: 16px;
    font-weight: 400;
    line-height: 1;
    color: #FFFFFF;
    margin-bottom: 10px;
    &:hover {
        background-color: #0080C1;
    }
`;
export const BtnEdit = styled.button`
    ${ArticleBtns}
    width: 189px;
    margin-right: 10px;
`;
export const BtnRemove = styled.button`
    ${ArticleBtns}
    width: 225px;
`;
export const ArticleAuthor = styled.div`
  margin-top: 34px;
  margin-bottom: 20px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
`;
export const AuthorImg = styled.div`
  width: 40px;
  height: 40px;
  background-color: #f0f0f0;
  border-radius: 50%;
  margin-top: 16px;
`;
export const AuthorImgPicture = styled.img`
  width: 100%;
  height: auto;
  display: block;
  -o-object-fit: cover;
  object-fit: cover;
`;
export const AuthorContent = styled.div`
  margin-left: 12px;
`;
export const AuthorName = styled.p`
  font-size: 20px;
  line-height: 26px;
  font-weight: 600;
  color: #009ee4;
`;
export const AuthorAbout = styled.p`
  font-size: 16px;
  line-height: 32px;
  color: #5f5f5f;
`;
export const MainContainerBlock = styled.div`
  max-width: 1178px;
  margin: 0 auto;
  padding: 0px 5px;
`;
export const MainTitle = styled.h3`
  margin-bottom: 32px;
  padding: 0 5px;
  font-size: 32px;
`;
export const MainContent = styled.div`
  max-width: 792px;
  width: 100%;
  padding: 0 5px 117px;
`;
export const MainText = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: #000000;
`;
