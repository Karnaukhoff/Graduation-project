import React from "react";
import * as S from "./styles/seller-styles";
import Header from "../components/Header/Header";
import MainMenu from "../components/MainMenu/MainMenu";

export const Seller = () => {
    return(
        <S.Container>
        <Header />
        <main>
            <S.MainContainer>
                <MainMenu />

                <S.MainHeader>Профиль продавца</S.MainHeader>
                <S.MainProfile>
                        <S.ProfileSeller>

                            <S.SellerLeft>
                                <S.SellerImg>
                                    <S.SellerImgLink>
                                        <S.SellerImgPhoto />
                                    </S.SellerImgLink>
                                </S.SellerImg>
                            </S.SellerLeft>
                            <S.SellerRight>
                                <S.SellerTitle>Кирилл Матвеев</S.SellerTitle>
                                <S.SellerCity_Inf>Санкт-Петербург</S.SellerCity_Inf>
                                <S.SellerCity_Inf>Продает товары с августа 2021</S.SellerCity_Inf>

                                <S.SellerButton>Показать&nbsp;телефон
                                    <S.SellerButtonSpan>8&nbsp;905&nbsp;ХХХ&nbsp;ХХ&nbsp;Х</S.SellerButtonSpan>
                                </S.SellerButton>
                            </S.SellerRight>

                        </S.ProfileSeller>
                </S.MainProfile>

                <S.MainTitle>Мои товары</S.MainTitle>
                <S.MainContent>
                        <S.MainCards>

                            <S.Item>
                                <S.Adv>
                                    <S.AdvImg>
                                        <S.AdvImgLink href="#">
                                            <S.AdvPhoto src="#"/>
                                        </S.AdvImgLink>
                                    </S.AdvImg>
                                    <S.AdvContent>
                                        <S.AdvContentLink>
                                            <S.AdvContentTitle>Ракетка для большого тенниса Triumph Pro ST</S.AdvContentTitle>  
                                        </S.AdvContentLink>
                                        <S.AdvContentPrice>2&nbsp;200&nbsp;₽</S.AdvContentPrice>
                                        <S.AdvContentPlace>Санкт-Петербург</S.AdvContentPlace>
                                        <S.AdvContentDate>Сегодня в&nbsp;10:45</S.AdvContentDate>
                                    </S.AdvContent>
                                </S.Adv>
                            </S.Item>
                            <S.Item>
                                <S.Adv>
                                    <S.AdvImg>
                                        <S.AdvImgLink href="#">
                                            <S.AdvPhoto src="#"/>
                                        </S.AdvImgLink>
                                    </S.AdvImg>
                                    <S.AdvContent>
                                        <S.AdvContentLink>
                                            <S.AdvContentTitle>Ракетка для большого тенниса Triumph Pro ST</S.AdvContentTitle>  
                                        </S.AdvContentLink>
                                        <S.AdvContentPrice>2&nbsp;200&nbsp;₽</S.AdvContentPrice>
                                        <S.AdvContentPlace>Санкт-Петербург</S.AdvContentPlace>
                                        <S.AdvContentDate>Сегодня в&nbsp;10:45</S.AdvContentDate>
                                    </S.AdvContent>
                                </S.Adv>
                            </S.Item>
                            <S.Item>
                                <S.Adv>
                                    <S.AdvImg>
                                        <S.AdvImgLink href="#">
                                            <S.AdvPhoto src="#"/>
                                        </S.AdvImgLink>
                                    </S.AdvImg>
                                    <S.AdvContent>
                                        <S.AdvContentLink>
                                            <S.AdvContentTitle>Ракетка для большого тенниса Triumph Pro ST</S.AdvContentTitle>  
                                        </S.AdvContentLink>
                                        <S.AdvContentPrice>2&nbsp;200&nbsp;₽</S.AdvContentPrice>
                                        <S.AdvContentPlace>Санкт-Петербург</S.AdvContentPlace>
                                        <S.AdvContentDate>Сегодня в&nbsp;10:45</S.AdvContentDate>
                                    </S.AdvContent>
                                </S.Adv>
                            </S.Item>
                            <S.Item>
                                <S.Adv>
                                    <S.AdvImg>
                                        <S.AdvImgLink href="#">
                                            <S.AdvPhoto src="#"/>
                                        </S.AdvImgLink>
                                    </S.AdvImg>
                                    <S.AdvContent>
                                        <S.AdvContentLink>
                                            <S.AdvContentTitle>Ракетка для большого тенниса Triumph Pro ST</S.AdvContentTitle>  
                                        </S.AdvContentLink>
                                        <S.AdvContentPrice>2&nbsp;200&nbsp;₽</S.AdvContentPrice>
                                        <S.AdvContentPlace>Санкт-Петербург</S.AdvContentPlace>
                                        <S.AdvContentDate>Сегодня в&nbsp;10:45</S.AdvContentDate>
                                    </S.AdvContent>
                                </S.Adv>
                            </S.Item>
                            <S.Item>
                                <S.Adv>
                                    <S.AdvImg>
                                        <S.AdvImgLink href="#">
                                            <S.AdvPhoto src="#"/>
                                        </S.AdvImgLink>
                                    </S.AdvImg>
                                    <S.AdvContent>
                                        <S.AdvContentLink>
                                            <S.AdvContentTitle>Ракетка для большого тенниса Triumph Pro ST</S.AdvContentTitle>  
                                        </S.AdvContentLink>
                                        <S.AdvContentPrice>2&nbsp;200&nbsp;₽</S.AdvContentPrice>
                                        <S.AdvContentPlace>Санкт-Петербург</S.AdvContentPlace>
                                        <S.AdvContentDate>Сегодня в&nbsp;10:45</S.AdvContentDate>
                                    </S.AdvContent>
                                </S.Adv>
                            </S.Item>
                            <S.Item>
                                <S.Adv>
                                    <S.AdvImg>
                                        <S.AdvImgLink href="#">
                                            <S.AdvPhoto src="#"/>
                                        </S.AdvImgLink>
                                    </S.AdvImg>
                                    <S.AdvContent>
                                        <S.AdvContentLink>
                                            <S.AdvContentTitle>Ракетка для большого тенниса Triumph Pro ST</S.AdvContentTitle>  
                                        </S.AdvContentLink>
                                        <S.AdvContentPrice>2&nbsp;200&nbsp;₽</S.AdvContentPrice>
                                        <S.AdvContentPlace>Санкт-Петербург</S.AdvContentPlace>
                                        <S.AdvContentDate>Сегодня в&nbsp;10:45</S.AdvContentDate>
                                    </S.AdvContent>
                                </S.Adv>
                            </S.Item>
                            <S.Item>
                                <S.Adv>
                                    <S.AdvImg>
                                        <S.AdvImgLink href="#">
                                            <S.AdvPhoto src="#"/>
                                        </S.AdvImgLink>
                                    </S.AdvImg>
                                    <S.AdvContent>
                                        <S.AdvContentLink>
                                            <S.AdvContentTitle>Ракетка для большого тенниса Triumph Pro ST</S.AdvContentTitle>  
                                        </S.AdvContentLink>
                                        <S.AdvContentPrice>2&nbsp;200&nbsp;₽</S.AdvContentPrice>
                                        <S.AdvContentPlace>Санкт-Петербург</S.AdvContentPlace>
                                        <S.AdvContentDate>Сегодня в&nbsp;10:45</S.AdvContentDate>
                                    </S.AdvContent>
                                </S.Adv>
                            </S.Item>
                            <S.Item>
                                <S.Adv>
                                    <S.AdvImg>
                                        <S.AdvImgLink href="#">
                                            <S.AdvPhoto src="#"/>
                                        </S.AdvImgLink>
                                    </S.AdvImg>
                                    <S.AdvContent>
                                        <S.AdvContentLink>
                                            <S.AdvContentTitle>Ракетка для большого тенниса Triumph Pro ST</S.AdvContentTitle>  
                                        </S.AdvContentLink>
                                        <S.AdvContentPrice>2&nbsp;200&nbsp;₽</S.AdvContentPrice>
                                        <S.AdvContentPlace>Санкт-Петербург</S.AdvContentPlace>
                                        <S.AdvContentDate>Сегодня в&nbsp;10:45</S.AdvContentDate>
                                    </S.AdvContent>
                                </S.Adv>
                            </S.Item>

                        </S.MainCards>
                    </S.MainContent>
            </S.MainContainer>
        </main>
   </S.Container>
    )
}