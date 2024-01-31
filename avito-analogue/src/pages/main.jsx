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
                    <   S.SearchBtn>Найти</S.SearchBtn>
                    </S.SearchForm>
                </S.MainSearch>
                <S.MainContainer>
                    <S.MainTitle>Объявления</S.MainTitle>
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