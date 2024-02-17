import React, { useEffect } from "react";
import * as S from "./styles/main-styles";
import Advertisement from "../components/Advertisement/Advertisement";
import { useDispatch, useSelector } from "react-redux";
import { getAllAds } from "../api/api";
import { setAllAds } from "../store/slices/adSlice";
import Header from "../components/Header/Header";

export const Main = () => {
  const allAds = useSelector((state) => state.advertisement.all);
  const dispatch = useDispatch();

  useEffect(() => {
    (
      async () => {
        await getAllAds().then((ads) => {
          dispatch(setAllAds(ads))
        });
      }
    )()
    // eslint-disable-next-line
  }, [])
  return (
    <S.Container>
      <S.Header>
        <S.HeaderNav>
          <Header />
        </S.HeaderNav>
      </S.Header>
      <main>
        <S.MainSearch>
          <S.SearchLogoLink to="/">
            <S.SearchLogoIMG src="/img/logo.png" alt="logo" />
          </S.SearchLogoLink>
          <S.SearchLogoLinkMob to="/">
            <S.SearchLogoIMGMob src="/img/logo-mob.png" alt="logo" />
          </S.SearchLogoLinkMob>
          <S.SearchForm>
            <S.SearchText
              type="search"
              placeholder="Поиск по объявлениям"
              name="search"
            />
            <S.SearchTextMob
              type="search"
              placeholder="Поиск по объявлениям"
              name="search"
            />
            <S.SearchBtn>Найти</S.SearchBtn>
          </S.SearchForm>
        </S.MainSearch>
        <S.MainContainer>
          <S.MainTitle>Объявления</S.MainTitle>
          <S.MainContent>
            <S.MainCards>
              {
                allAds.map((item) => {
                  return <Advertisement 
                  images={item.images} 
                  title={item.title} 
                  price={item.price} 
                  city={item.city} 
                  released={item.created_on} 
                  id={item.id}
                  />
                })
              }
            </S.MainCards>
          </S.MainContent>
        </S.MainContainer>
      </main>
    </S.Container>
  );
};
