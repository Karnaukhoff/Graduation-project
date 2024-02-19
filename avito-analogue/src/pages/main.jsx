import React, { useEffect, useState } from "react";
import * as S from "./styles/main-styles";
import Advertisement from "../components/Advertisement/Advertisement";
import { useDispatch, useSelector } from "react-redux";
import { getAllAds, getUser } from "../api/api";
import { setAllAds, setFilteredAds } from "../store/slices/adSlice";
import Header from "../components/Header/Header";
import { useNavigate } from "react-router-dom";

export const Main = () => {
  const allAds = useSelector((state) => state.advertisement.all);
  const token = useSelector((state) => state.user.token);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
  function submitSearch(e){
    e.preventDefault()
    dispatch(setFilteredAds(search))
  }
  getUser(token).then((user) => console.log(user))
  return (
    <S.Container>
      <S.Header>
        <S.HeaderNav>
          <Header page={"main"}/>
        </S.HeaderNav>
      </S.Header>
      <main>
        <S.MainSearch>
          <S.SearchLogoLink onClick={() => {
            navigate("/")
          }}>
            <S.SearchLogoIMG src="/img/logo.png" alt="logo" />
          </S.SearchLogoLink>
          <S.SearchForm>
            <S.SearchText
              type="search"
              placeholder="Поиск по объявлениям"
              name="search"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
            <S.SearchBtn onClick={submitSearch}>Найти</S.SearchBtn>
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
