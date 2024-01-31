import React from "react";
import * as S from "./styles/profile-styles"

export const Profile = () => {
    return(
    <S.Container>
        <S.Header>
            <S.HeaderNav>
                <S.HeaderBtnMainEnter>Разместить объявление</S.HeaderBtnMainEnter>
                <S.HeaderBtnMainEnter>Личный кабинет</S.HeaderBtnMainEnter>
            </S.HeaderNav>
        </S.Header>
        <main>
            <S.MainContainer>
                <S.MainMenu>
                    <S.MenuLogoLink to="/">
                        <S.MenuLogoIMG src="/img/logo.png" alt="logo" />
                    </S.MenuLogoLink>
                    <S.MenuBtn onClick={() => window.location.href="/"}>
                        Вернуться на&nbsp;главную
                    </S.MenuBtn>
                </S.MainMenu>

                <S.MainHeader>Здравствуйте, Максим!</S.MainHeader>
                <S.MainProfile>
                    <S.ProfileContent>
                        <S.ProfileTitle>Настройки профиля</S.ProfileTitle>
                        <S.ProfileSettings>

                            <S.SettingsLeft>
                                <S.SettingsImg>
                                    <S.SettingImgLink>
                                        <S.SettingImgPhoto />
                                    </S.SettingImgLink>
                                </S.SettingsImg>
                                <S.SettingsChangePhoto>Заменить</S.SettingsChangePhoto>
                            </S.SettingsLeft>
                            <S.SettingsRight>
                                <S.SettingsForm>

                                    <S.SettingsDiv>
                                        <S.SettingsLabel for="fname">Имя</S.SettingsLabel>
                                        <S.SettingsOption name="fname" type="text" value="Максим" placeholder="" />
                                    </S.SettingsDiv>
                                    <S.SettingsDiv>
                                        <S.SettingsLabel for="lname">Фамилия</S.SettingsLabel>
                                        <S.SettingsOption name="lname" type="text" value="Городецкий" placeholder="" />
                                    </S.SettingsDiv>
                                    <S.SettingsDiv>
                                        <S.SettingsLabel for="city">Город</S.SettingsLabel>
                                        <S.SettingsOption name="city" type="text" value="Санкт-Петербург" placeholder="" />
                                    </S.SettingsDiv>
                                    <S.SettingsDiv>
                                        <S.SettingsLabel for="phone">Телефон</S.SettingsLabel> 
                                        <S.SettingsOptionPhone name="phone" type="tel" value="89161234567" placeholder="+79161234567" />
                                    </S.SettingsDiv>

                                    <S.SettingsBtn>Сохранить</S.SettingsBtn>
                                </S.SettingsForm>
                            </S.SettingsRight>

                        </S.ProfileSettings>
                    </S.ProfileContent>
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