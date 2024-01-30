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
            <main>
                <S.MainSearch>
                    <S.SearchLogoLink to="/">
                        <S.SearchLogoIMG src="/img/logo.png" alt="logo" />
                    </S.SearchLogoLink>
                    <S.SearchForm>
                        <S.SearchText 
                        type="search"
                        placeholder="Поиск по объявлениям"
                        name="search"
                        />
                    </S.SearchForm>
                </S.MainSearch>
            </main>
       </S.Container>
    )
}