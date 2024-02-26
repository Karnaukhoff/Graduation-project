import * as S from "./Header-styles";
import React, { useState } from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { setToken, setUser } from "../../store/slices/userSlice";
import { postAdWithPhoto } from "../../api/api";

function Header({page}) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState();
  const [photos, setPhotos] = useState([]);
  const dispatch=  useDispatch();
  const user = useSelector((state) => state.user.user);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  console.log(photos);
  const modalContent = (
    <>
    <S.ModalHeader>
        <S.ModalHeaderTitle>Новое объявление</S.ModalHeaderTitle>
        <S.ModalHeaderClose src="/img/close_modal.png" alt="close" onClick={closeModal}/>
    </S.ModalHeader>
    <S.ModalTitle>
        <S.ModalTitleHeader>Название</S.ModalTitleHeader>
        <S.ModalTitleInput placeholder="Введите название" onChange={(event) => {setTitle(event.target.value)}}/>
    </S.ModalTitle>
    <S.ModalDescription>
        <S.ModalDescritionHeader>Описание</S.ModalDescritionHeader>
        <S.ModalDescriptionInput placeholder="Введите описание" onChange={(event) => {setDescription(event.target.value)}}/>
    </S.ModalDescription>
    <S.ModalPhotos>
        <S.ModalFormNewArtP>Фотографии товара <S.ModalFormNewArtSpan>не более 5 фотографий</S.ModalFormNewArtSpan></S.ModalFormNewArtP>
        <S.ModalAddPhotosBar>
          <S.ModalAddPhotos>
              {photos[0] === undefined 
              ?
              (<img src="/img/add_photo.png" alt="add_photo" />)
              :
              (<S.Success src="/img/success.png" alt="added_photo"/>)
              }
              <input type="file" accept="image/*" onChange={(event) => {console.log(event);
                setPhotos([...photos.slice(0, 0), event.target.files[0], ...photos.slice(1)])}}/>
          </S.ModalAddPhotos>
          <S.ModalAddPhotos>
              {photos[1] === undefined 
              ?
              (<img src="/img/add_photo.png" alt="add_photo" />)
              :
              (<S.Success src="/img/success.png" alt="added_photo"/>)
              }
              <input type="file" accept="image/*" onChange={(event) => {console.log(event);
                setPhotos([...photos.slice(0, 1), event.target.files[0], ...photos.slice(2)])}}/>
          </S.ModalAddPhotos>
          <S.ModalAddPhotos>
              {photos[2] === undefined 
              ?
              (<img src="/img/add_photo.png" alt="add_photo" />)
              :
              (<S.Success src="/img/success.png" alt="added_photo"/>)
              }
              <input type="file" accept="image/*" onChange={(event) => {console.log(event);
                setPhotos([...photos.slice(0, 2), event.target.files[0], ...photos.slice(3)])}}/>
          </S.ModalAddPhotos>
          <S.ModalAddPhotos>
              {photos[3] === undefined 
              ?
              (<img src="/img/add_photo.png" alt="add_photo" />)
              :
              (<S.Success src="/img/success.png" alt="added_photo"/>)
              }
              <input type="file" accept="image/*" onChange={(event) => {console.log(event);
                setPhotos([...photos.slice(0, 3), event.target.files[0], ...photos.slice(4)])}}/>
          </S.ModalAddPhotos>
          <S.ModalAddPhotos>
              {photos[4] === undefined 
              ?
              (<img src="/img/add_photo.png" alt="add_photo" />)
              :
              (<S.Success src="/img/success.png" alt="added_photo"/>)
              }
              <input type="file" accept="image/*" onChange={(event) => {console.log(event);
                setPhotos([...photos.slice(0, 4), event.target.files[0], ...photos.slice(5)])}}/>
          </S.ModalAddPhotos>
        </S.ModalAddPhotosBar>
    </S.ModalPhotos>
    <S.ModalBlockPrice>
      <label for="price">Цена</label>
      <S.ModalInputPrice onChange={(event) => {setPrice(Number(event.target.value))}}/>
      <S.ModalInputPriceCover></S.ModalInputPriceCover>
    </S.ModalBlockPrice>
    <S.ModalPublishButton onClick={() => postAdWithPhoto({})
    //api
    //dispatch new ad list
    //show user sells
    //ability to update token
    }>Опубликовать</S.ModalPublishButton>
    </>
  );

  return (
    <S.Header>
      <S.HeaderNav>
        {
          user !== null ? 
        <>
        <S.HeaderBtnMainEnter onClick={openModal}>
          Разместить объявление
        </S.HeaderBtnMainEnter>
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={
            {
                content: {
                    width: "620px",
                    height: "550px",
                    inset: "unset"
                  },
                overlay: {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }
            }
        }>
          {modalContent}
        </Modal>
        {page === "profile" ? 
        <S.HeaderBtnMainEnter onClick={() => {
          localStorage.removeItem("authData")
          dispatch(setUser(null))
          localStorage.removeItem("token")
          dispatch(setToken(null))
          window.location.href = "/register"
        }}>Выйти</S.HeaderBtnMainEnter>
        :
        <S.HeaderBtnMainEnter onClick={() => (window.location.href = "/profile")}>Личный кабинет</S.HeaderBtnMainEnter>
        }
        </>
         :           
        <S.HeaderBtnMainEnter
        onClick={() => (window.location.href = "/register")}
      >
        Вход в личный кабинет
      </S.HeaderBtnMainEnter>
        }
        
      </S.HeaderNav>
    </S.Header>
  );
}
export default Header;
