import React from "react";
import * as S from "./styles/profile-styles"
import Header from "../components/Header/Header";
import  MainMenu  from "../components/MainMenu/MainMenu";
import Advertisement from "../components/Advertisement/Advertisement";

export const Profile = () => {
    return(
    <S.Container>
        <Header />
        <main>
            <S.MainContainer>
                <MainMenu />

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
                                        <S.SettingsOption placeholder="" />
                                    </S.SettingsDiv>
                                    <S.SettingsDiv>
                                        <S.SettingsLabel for="lname">Фамилия</S.SettingsLabel>
                                        <S.SettingsOption placeholder="" />
                                    </S.SettingsDiv>
                                    <S.SettingsDiv>
                                        <S.SettingsLabel for="city">Город</S.SettingsLabel>
                                        <S.SettingsOption placeholder="" />
                                    </S.SettingsDiv>
                                    <S.SettingsDiv>
                                        <S.SettingsLabel for="phone">Телефон</S.SettingsLabel> 
                                        <S.SettingsOptionPhone placeholder="" />
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

                            <Advertisement />
                            <Advertisement />
                            <Advertisement />
                            <Advertisement />
                            <Advertisement />
                            <Advertisement />
                            <Advertisement />
                            <Advertisement />

                        </S.MainCards>
                    </S.MainContent>
            </S.MainContainer>
        </main>
   </S.Container>
    )
}