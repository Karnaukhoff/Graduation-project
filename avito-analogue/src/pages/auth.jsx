import React from "react";
import * as S from "./styles/Auth-style";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export function Authorization() {
    const [error, setError] = useState(null);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [isLoginMode, setIsLoginMode] = useState(true);
    const [loading, setLoading] = useState(false)
  
    const handleLogin = async ({ email, password }) => {
      setLoading(true)
      if (email === ""){
        setError("Укажите почту")
        setLoading(false)
        return
      }
      if (password === ""){
        setError("Укажите пароль")
        setLoading(false)
        return
      }
      
      /*login({email, password})
      .then((user) => {
        if (user.detail === "Пользователь с таким email или паролем не найден"){
          setError(user.detail)
          return
        }
        setUser(user.username)
        localStorage.setItem("user", user.username);
        window.location.href="/"
        })
        .finally(() => {
          setLoading(false)
        })*/
    };
  
    const handleRegister = async ({email, password, repeatPassword}) => {
      setLoading(true)
      if (email === ""){
        setError("Укажите почту")
        setLoading(false)
        return
      }
      if (password === ""){
        setError("Укажите пароль")
        setLoading(false)
        return
      }
      if (password !== repeatPassword){
        setError("Пароли не совпадают")
        setLoading(false)
        return
      }
      /*signUp({email, password})
      .then((user) => {
        if (user.email === "Пользователь с таким адрес электронной почты уже существует."){
          setError(user.email)
          return
        }
        if (user.username === "Пользователь с таким именем уже существует."){
          setError(user.username)
          return
        }
        if (user.password !== password && user.password !== undefined){
          setError(user.password[0])
          return
        }
        window.location.href="/login"
      })
      .finally(() => {
        setLoading(false)
      })*/
    };
  
    // Сбрасываем ошибку если пользователь меняет данные на форме или меняется режим формы
    useEffect(() => {
      setError(null);
    }, [isLoginMode, email, password, repeatPassword]);
  

    return (
        <S.PageContainer>
        <S.ModalForm>
          <Link to="/register" onClick={() => setIsLoginMode(true)}>
            <S.ModalLogo>
              <S.ModalLogoImage src="/img/logo_modal.png" alt="logo" />
            </S.ModalLogo>
          </Link>
          {isLoginMode ? (
            <>
              <S.Inputs>
                <S.ModalInput
                  type="text"
                  name="login"
                  placeholder="Email"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
                <S.ModalInput
                  type="password"
                  name="password"
                  placeholder="Пароль"
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                />
              </S.Inputs>
              {error && <S.Error>{error}</S.Error>}
              <S.Buttons>
                <S.PrimaryButton disabled={loading} onClick={() => handleLogin({ email, password })}>
                  <S.PrimaryButtonLink>Войти</S.PrimaryButtonLink>
                </S.PrimaryButton>
                <S.SecondaryButton disabled={loading} onClick={() => setIsLoginMode(!isLoginMode)}>
                    <S.SecondaryButtonLink>Зарегистрироваться</S.SecondaryButtonLink>
                </S.SecondaryButton>
              </S.Buttons>
            </>
          ) : (
            <>
              <S.Inputs>
                <S.ModalInput
                  type="text"
                  name="login"
                  placeholder="Email"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
                <S.ModalInput
                  type="password"
                  name="password"
                  placeholder="Пароль"
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                />
                <S.ModalInput
                  type="password"
                  name="repeat-password"
                  placeholder="Повторите пароль"
                  value={repeatPassword}
                  onChange={(event) => {
                    setRepeatPassword(event.target.value);
                  }}
                />
                <S.ModalInput
                  type="text"
                  name="name"
                  placeholder="Имя (необязательно)"
                  //Логика ввода
                />
                <S.ModalInput
                  type="text"
                  name="surname"
                  placeholder="Фамилия (необязательно)"
                  //Логика ввода
                />
                <S.ModalInput
                  type="text"
                  name="city"
                  placeholder="Город (необязательно)"
                  //Логика ввода
                />
              </S.Inputs>
              {error && <S.Error>{error}</S.Error>}
              <S.Buttons>
                <S.PrimaryButton disabled={loading} onClick={() => handleRegister({email, password, repeatPassword})}>
                  Зарегистрироваться
                </S.PrimaryButton>
              </S.Buttons>
            </>
          )}
        </S.ModalForm>
      </S.PageContainer>
      );
}