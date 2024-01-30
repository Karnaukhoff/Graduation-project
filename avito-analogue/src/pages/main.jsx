import React from "react";
import * as S from "./styles/main-styles"

export const Main = () => {
    return(
       <S.Container>
            <S.Header>
                <S.HeaderNav>
                    <S.HeaderBtnMainEnter>Вход в личный кабинет</S.HeaderBtnMainEnter>
                </S.HeaderNav>
            </S.Header>
            <Main>
                <S.MainSearch>
                    <S.SearchLogoLink href="#">
                        <S.SearchLogoIMG src="/img/logo.png" alt="logo" />
                    </S.SearchLogoLink>
                </S.MainSearch>
            </Main>
       </S.Container>
    )
}