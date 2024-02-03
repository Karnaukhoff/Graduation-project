import React from "react";
import * as S from "./Header-styles"

function Header(){
    return(
    <S.Header>
        <S.HeaderNav>
            <S.HeaderBtnMainEnter>Разместить объявление</S.HeaderBtnMainEnter>
            <S.HeaderBtnMainEnter>Личный кабинет</S.HeaderBtnMainEnter>
        </S.HeaderNav>
    </S.Header>
    )
}
export default Header;