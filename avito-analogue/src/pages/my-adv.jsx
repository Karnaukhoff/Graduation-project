import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import * as S from "./styles/my-adv-styles";
import Header from "../components/Header/Header";
import MainMenu from "../components/MainMenu/MainMenu";
import { useDispatch, useSelector } from "react-redux";
import { deleteAd, deletePhoto, getAd, getAllAds, getComments, postComment, postNewPhoto, updateAd } from "../api/api";
import { useNavigate } from "react-router-dom";
import { dateFormat, priceFormat, reviewTitle, sellsFrom } from "../usefulFunctions";
import { setAllAds } from "../store/slices/adSlice";
import { setToken } from "../store/slices/userSlice";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

export const MyAdvertisement = () => {
    const [modalIsOpenEdit, setModalIsOpenEdit] = useState(false);
    const [modalIsOpenReview, setModalIsOpenReview] = useState(false);
    const user = useSelector((state) => state.user.user);
    const token = useSelector((state) => state.user.token);
    const [ad, setAd] = useState(null);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState();
    const [photos, setPhotos] = useState([]);
    const dispatch = useDispatch();
    const [comments, setComments] = useState([]);
    const [commentText, setCommentText] = useState("");
    const navigate = useNavigate();
    const [photoChanged1, setPhotoChanged1] = useState(false);
    const [photoChanged2, setPhotoChanged2] = useState(false);
    const [photoChanged3, setPhotoChanged3] = useState(false);
    const [photoChanged4, setPhotoChanged4] = useState(false);
    const [photoChanged5, setPhotoChanged5] = useState(false);

    useEffect(() => {
      getAd(JSON.parse(localStorage.getItem("postId"))).then((post) => {
        setAd(post);
      });
    }, []);
    useEffect(() => {
        getComments({ pk: JSON.parse(localStorage.getItem("postId")) }).then(
          (items) => {
            console.log(items);
            setComments(items);
          }
        );
      }, []);

    const openModalEdit = () => {
        setTitle(ad.title);
        setDescription(ad.description);
        setPrice(ad.price);
        setModalIsOpenEdit(true);
        setPhotos(ad.images)
        console.log(ad.images);
    };

    const closeModalEdit = () => {
      setModalIsOpenEdit(false);
      setPhotos([])
    };

    const openModalReview = () => {
        setModalIsOpenReview(true);
      };
    
      const closeModalReview = () => {
        setModalIsOpenReview(false);
        setCommentText("");
      };

    const modalContentEdit = (
      <>
      <S.ModalHeader>
          <S.ModalHeaderTitle>Редактировать объявление</S.ModalHeaderTitle>
          <S.ModalHeaderClose src="/img/close_modal.png" alt="close" onClick={closeModalEdit}/>
      </S.ModalHeader>
      <S.ModalTitle>
          <S.ModalTitleHeader>Название</S.ModalTitleHeader>
          <S.ModalTitleInput placeholder="Введите название" onChange={(event) => {setTitle(event.target.value)}} value={title}/>
      </S.ModalTitle>
      <S.ModalDescription>
          <S.ModalDescritionHeader>Описание</S.ModalDescritionHeader>
          <S.ModalDescriptionInput placeholder="Введите описание" onChange={(event) => {setDescription(event.target.value)}} value={description}/>
      </S.ModalDescription>
        <S.ModalPhotos>
          <S.ModalFormNewArtP>Фотографии товара <S.ModalFormNewArtSpan>не более 5 фотографий</S.ModalFormNewArtSpan></S.ModalFormNewArtP>
          <S.ModalAddPhotosBar>
          <S.ModalAddPhotos>
            <S.AddPhotoBlock>
            {photos[0] === undefined || photos[0] === null
              ?
              <label for="add_photo1"><img src="/img/add_photo.png" alt="add_photo" /></label>
              :
                <label for="add_photo1">
                    <S.Success src={photoChanged1 ? URL.createObjectURL(photos[0]) : `http://localhost:8090/${photos[0].url}`} alt="added_photo" />
                </label>
              }
            
              <S.AddPhoto type="file" id="add_photo1" accept="image/*" onChange={(event) => {
                setPhotos([...photos.slice(0, 0), event.target.files[0], ...photos.slice(1)])
                setPhotoChanged1(true)
                if (photos[0] !== undefined && photos[0] !== null){
                    //удалить
                    deletePhoto({id: JSON.parse(localStorage.getItem("postId")), url: `${photos[0].url}`, token: token}).then((item) => {
                        console.log("delete", "id:", JSON.parse(localStorage.getItem("postId")), "url:", `${photos[0].url}`, "token:", token, photos);
                        if (item?.access_token){
                            dispatch(setToken(item))
                            console.log("delete", "id:", JSON.parse(localStorage.getItem("postId")), "url:", `${photos[0].url}`, "token:", item, photos);
                            deletePhoto({id: JSON.parse(localStorage.getItem("postId")), url: `${photos[0].url}`, token: item})
                            postNewPhoto({id: JSON.parse(localStorage.getItem("postId")), photo: event.target.files[0], token: item})
                            console.log("delete with update");
                        } else {
                            postNewPhoto({id: JSON.parse(localStorage.getItem("postId")), photo: event.target.files[0], token: token})
                        }
                    })
                } else{
                    //добавить новую
                    postNewPhoto({id: JSON.parse(localStorage.getItem("postId")), photo: event.target.files[0], token: token}).then((item) => {
                        if (item?.access_token){
                            dispatch(setToken(item))
                            postNewPhoto({id: JSON.parse(localStorage.getItem("postId")), photo: event.target.files[0], token: item})
                        }
                    })
                }
                }}/>
                <button hidden={photos[0] ? false : true} onClick={() => {
                    deletePhoto({id: JSON.parse(localStorage.getItem("postId")), url: `${photos[0].url}`, token: token}).then((item) => {
                        if (item?.access_token){
                            dispatch(setToken(item))
                            deletePhoto({id: JSON.parse(localStorage.getItem("postId")), url: `${photos[0].url}`, token: item})
                            console.log("delete with update");
                        }
                    })
                    setPhotos([...photos.slice(0, 0), null, ...photos.slice(1)])
                }}>Удалить</button>
            </S.AddPhotoBlock>
        </S.ModalAddPhotos>
          <S.ModalAddPhotos>
          <S.AddPhotoBlock>
            {photos[1] === undefined || photos[1] === null
              ?
              <label for="add_photo2"><img src="/img/add_photo.png" alt="add_photo" /></label>
              :
                <label for="add_photo2">
                    <S.Success src={photoChanged2 ? URL.createObjectURL(photos[1]) : `http://localhost:8090/${photos[1].url}`} alt="added_photo" />
                </label>
              }
              <S.AddPhoto type="file" id="add_photo2" accept="image/*" onChange={(event) => {
                setPhotos([...photos.slice(0, 1), event.target.files[0], ...photos.slice(2)])
                setPhotoChanged2(true)
                if (photos[1] !== undefined && photos[1] !== null){
                    //удалить
                    deletePhoto({id: JSON.parse(localStorage.getItem("postId")), url: `${photos[1].url}`, token: token}).then((item) => {
                        console.log("delete", "id:", JSON.parse(localStorage.getItem("postId")), "url:", `${photos[1].url}`, "token:", token, photos);
                        if (item?.access_token){
                            dispatch(setToken(item))
                            console.log("delete", "id:", JSON.parse(localStorage.getItem("postId")), "url:", `${photos[1].url}`, "token:", item, photos);
                            deletePhoto({id: JSON.parse(localStorage.getItem("postId")), url: `${photos[1].url}`, token: item})
                            postNewPhoto({id: JSON.parse(localStorage.getItem("postId")), photo: event.target.files[0], token: item})
                            console.log("delete with update");
                        } else {
                            postNewPhoto({id: JSON.parse(localStorage.getItem("postId")), photo: event.target.files[0], token: token})
                        }
                    })
                } else{
                    //добавить новую
                    postNewPhoto({id: JSON.parse(localStorage.getItem("postId")), photo: event.target.files[0], token: token}).then((item) => {
                        if (item?.access_token){
                            dispatch(setToken(item))
                            postNewPhoto({id: JSON.parse(localStorage.getItem("postId")), photo: event.target.files[0], token: item})
                        }
                    })
                }
                }}/>
                <button hidden={photos[1] ? false : true} onClick={() => {
                    deletePhoto({id: JSON.parse(localStorage.getItem("postId")), url: `${photos[1].url}`, token: token}).then((item) => {
                        if (item?.access_token){
                            dispatch(setToken(item))
                            deletePhoto({id: JSON.parse(localStorage.getItem("postId")), url: `${photos[1].url}`, token: item})
                            console.log("delete with update");
                        }
                    })
                    setPhotos([...photos.slice(0, 1), null, ...photos.slice(2)])
                }}>Удалить</button>
            </S.AddPhotoBlock>
          </S.ModalAddPhotos>
          <S.ModalAddPhotos>
          <S.AddPhotoBlock> 
            {photos[2] === undefined || photos[2] === null
              ?
              <label for="add_photo3"><img src="/img/add_photo.png" alt="add_photo" /></label>
              :
                <label for="add_photo3">
                    <S.Success src={photoChanged3 ? URL.createObjectURL(photos[2]) : `http://localhost:8090/${photos[2].url}`} alt="added_photo" />
                </label>
              }
              <S.AddPhoto type="file" id="add_photo3" accept="image/*" onChange={(event) => {
                setPhotos([...photos.slice(0, 2), event.target.files[0], ...photos.slice(3)])
                setPhotoChanged3(true)
                if (photos[2] !== undefined && photos[2] !== null){
                    //удалить
                    deletePhoto({id: JSON.parse(localStorage.getItem("postId")), url: `${photos[2].url}`, token: token}).then((item) => {
                        console.log("delete", "id:", JSON.parse(localStorage.getItem("postId")), "url:", `${photos[2].url}`, "token:", token, photos);
                        if (item?.access_token){
                            dispatch(setToken(item))
                            console.log("delete", "id:", JSON.parse(localStorage.getItem("postId")), "url:", `${photos[2].url}`, "token:", item, photos);
                            deletePhoto({id: JSON.parse(localStorage.getItem("postId")), url: `${photos[2].url}`, token: item})
                            postNewPhoto({id: JSON.parse(localStorage.getItem("postId")), photo: event.target.files[0], token: item})
                            console.log("delete with update");
                        } else {
                            postNewPhoto({id: JSON.parse(localStorage.getItem("postId")), photo: event.target.files[0], token: token})
                        }
                    })
                } else{
                    //добавить новую
                    postNewPhoto({id: JSON.parse(localStorage.getItem("postId")), photo: event.target.files[0], token: token}).then((item) => {
                        if (item?.access_token){
                            dispatch(setToken(item))
                            postNewPhoto({id: JSON.parse(localStorage.getItem("postId")), photo: event.target.files[0], token: item})
                        }
                    })
                }
                }}/>
                <button hidden={photos[2] ? false : true} onClick={() => {
                    deletePhoto({id: JSON.parse(localStorage.getItem("postId")), url: `${photos[2].url}`, token: token}).then((item) => {
                        if (item?.access_token){
                            dispatch(setToken(item))
                            deletePhoto({id: JSON.parse(localStorage.getItem("postId")), url: `${photos[2].url}`, token: item})
                            console.log("delete with update");
                        }
                    })
                    setPhotos([...photos.slice(0, 2), null, ...photos.slice(3)])
                }}>Удалить</button>
                </S.AddPhotoBlock>
          </S.ModalAddPhotos>
          <S.ModalAddPhotos>
          <S.AddPhotoBlock>
            {photos[3] === undefined || photos[3] === null
              ?
              <label for="add_photo4"><img src="/img/add_photo.png" alt="add_photo" /></label>
              :
                <label for="add_photo4">
                    <S.Success src={photoChanged4 ? URL.createObjectURL(photos[3]) : `http://localhost:8090/${photos[3].url}`} alt="added_photo" />
                </label>
              }
              <S.AddPhoto type="file" id="add_photo4" accept="image/*" onChange={(event) => {
                setPhotos([...photos.slice(0, 3), event.target.files[0], ...photos.slice(4)])
                setPhotoChanged4(true)
                if (photos[3] !== undefined && photos[3] !== null){
                    //удалить
                    deletePhoto({id: JSON.parse(localStorage.getItem("postId")), url: `${photos[3].url}`, token: token}).then((item) => {
                        console.log("delete", "id:", JSON.parse(localStorage.getItem("postId")), "url:", `${photos[3].url}`, "token:", token, photos);
                        if (item?.access_token){
                            dispatch(setToken(item))
                            console.log("delete", "id:", JSON.parse(localStorage.getItem("postId")), "url:", `${photos[3].url}`, "token:", item, photos);
                            deletePhoto({id: JSON.parse(localStorage.getItem("postId")), url: `${photos[3].url}`, token: item})
                            postNewPhoto({id: JSON.parse(localStorage.getItem("postId")), photo: event.target.files[0], token: item})
                            console.log("delete with update");
                        } else {
                            postNewPhoto({id: JSON.parse(localStorage.getItem("postId")), photo: event.target.files[0], token: token})
                        }
                    })
                } else{
                    //добавить новую
                    postNewPhoto({id: JSON.parse(localStorage.getItem("postId")), photo: event.target.files[0], token: token}).then((item) => {
                        if (item?.access_token){
                            dispatch(setToken(item))
                            postNewPhoto({id: JSON.parse(localStorage.getItem("postId")), photo: event.target.files[0], token: item})
                        }
                    })
                }
                }}/>
                <button hidden={photos[3] ? false : true} onClick={() => {
                    deletePhoto({id: JSON.parse(localStorage.getItem("postId")), url: `${photos[3].url}`, token: token}).then((item) => {
                        if (item?.access_token){
                            dispatch(setToken(item))
                            deletePhoto({id: JSON.parse(localStorage.getItem("postId")), url: `${photos[3].url}`, token: item})
                            console.log("delete with update");
                        }
                    })
                    setPhotos([...photos.slice(0, 3), null, ...photos.slice(4)])
                }}>Удалить</button>
            </S.AddPhotoBlock>
          </S.ModalAddPhotos>
          <S.ModalAddPhotos>
          <S.AddPhotoBlock>
            {photos[4] === undefined || photos[4] === null
              ?
              <label for="add_photo5"><img src="/img/add_photo.png" alt="add_photo" /></label>
              :
                <label for="add_photo5">
                    <S.Success src={photoChanged5 ? URL.createObjectURL(photos[4]) : `http://localhost:8090/${photos[4].url}`} alt="added_photo" />
                </label>
              }
              <S.AddPhoto type="file" id="add_photo5" accept="image/*" onChange={(event) => {
                setPhotos([...photos.slice(0, 4), event.target.files[0], ...photos.slice(5)])
                setPhotoChanged5(true)
                if (photos[4] !== undefined && photos[4] !== null){
                    //удалить
                    deletePhoto({id: JSON.parse(localStorage.getItem("postId")), url: `${photos[4].url}`, token: token}).then((item) => {
                        console.log("delete", "id:", JSON.parse(localStorage.getItem("postId")), "url:", `${photos[4].url}`, "token:", token, photos);
                        if (item?.access_token){
                            dispatch(setToken(item))
                            console.log("delete", "id:", JSON.parse(localStorage.getItem("postId")), "url:", `${photos[4].url}`, "token:", item, photos);
                            deletePhoto({id: JSON.parse(localStorage.getItem("postId")), url: `${photos[0].url}`, token: item})
                            postNewPhoto({id: JSON.parse(localStorage.getItem("postId")), photo: event.target.files[0], token: item})
                            console.log("delete with update");
                        } else {
                            postNewPhoto({id: JSON.parse(localStorage.getItem("postId")), photo: event.target.files[0], token: token})
                        }
                    })
                } else{
                    //добавить новую
                    postNewPhoto({id: JSON.parse(localStorage.getItem("postId")), photo: event.target.files[0], token: token}).then((item) => {
                        if (item?.access_token){
                            dispatch(setToken(item))
                            postNewPhoto({id: JSON.parse(localStorage.getItem("postId")), photo: event.target.files[0], token: item})
                        }
                    })
                }
                }}/>
                <button hidden={photos[4] ? false : true} onClick={() => {
                    deletePhoto({id: JSON.parse(localStorage.getItem("postId")), url: `${photos[4].url}`, token: token}).then((item) => {
                        if (item?.access_token){
                            dispatch(setToken(item))
                            deletePhoto({id: JSON.parse(localStorage.getItem("postId")), url: `${photos[4].url}`, token: item})
                            console.log("delete with update");
                        }
                    })
                    setPhotos([...photos.slice(0, 4), null, ...photos.slice(5)])
                }}>Удалить</button>
            </S.AddPhotoBlock>
          </S.ModalAddPhotos>
        </S.ModalAddPhotosBar>
      </S.ModalPhotos>
      <S.ModalBlockPrice>
        <label for="price">Цена</label>
        <S.ModalInputPrice onChange={(event) => {setPrice(event.target.value)}} value={price}/>
        <S.ModalInputPriceCover></S.ModalInputPriceCover>
      </S.ModalBlockPrice>
      <S.ModalPublishButton onClick={() => {
        updateAd({id: ad.id, token: token, title: title, description: description, price: price}).then((item) => {
            if (item?.access_token){
                console.log("update token");
                updateAd({id: ad.id, token: item, title: title, description: description, price: price}).then(() => {
                    getAllAds().then((ads) => {
                        dispatch(setAllAds(ads))
                        navigate(`/`)
                    })
                })
            } else {
                getAllAds().then((ads) => {
                    dispatch(setAllAds(ads))
                    navigate(`/`)
                })
            }
        })
      }}>Сохранить</S.ModalPublishButton>
      </>
    );
    
    const modalContentReviews = (
        <>
        <S.ModalHeader>
          <S.ModalHeaderTitle>Отзывы о товаре</S.ModalHeaderTitle>
          <S.ModalHeaderClose src="/img/close_modal.png" alt="close" onClick={closeModalReview}/>
        </S.ModalHeader>
        <S.ModalAddReviewForm>
            <S.ModalAddReviewNewArtBlock>
                <S.ModalAddReviewlabel>Добавить отзыв</S.ModalAddReviewlabel>
                <S.ModalAddReviewTextear cols="auto" rows="5" placeholder="Введите описание" value={commentText}
            onChange={(event) => setCommentText(event.target.value)}></S.ModalAddReviewTextear>
            </S.ModalAddReviewNewArtBlock>

            {user ? (
          <S.ModalAddReviewButton onClick={() => {
            postComment({pk: JSON.parse(localStorage.getItem("postId")), comment: commentText, token: token}).then((item) => {
              if (item?.access_token){
                dispatch(setToken(item));
                postComment({pk: JSON.parse(localStorage.getItem("postId")), comment: commentText, token: item}).then((newItem) => {
                  getComments({ pk: JSON.parse(localStorage.getItem("postId")) }).then((result) => setComments(result))
                  setCommentText("");
                  openModalReview();
                  console.log(newItem);
                })
              }
              else{
                getComments({ pk: JSON.parse(localStorage.getItem("postId")) }).then((result) => setComments(result))
                setCommentText("");
                openModalReview();
              }
            })
          }}>Опубликовать</S.ModalAddReviewButton>
        ) : (
          <S.ModalAddReviewButtonDisabled disabled={true}>
            Опубликовать
          </S.ModalAddReviewButtonDisabled>
        )}
            
        </S.ModalAddReviewForm>
        <S.ModalReviews>

        {comments.map((comment) => {
          return (
            <S.Review>
              <S.ReviewItem>
                <S.ReviewLeft>
                  <S.ReviewImg>
                    <S.ReviewImgPicture src={`http://localhost:8090/${comment.author.avatar}`} alt="" />
                  </S.ReviewImg>
                </S.ReviewLeft>
                <S.ReviewRight>
                  <S.ReviewName>
                    {comment.author.name}{" "}
                    <S.ReviewNameSpan>
                      {dateFormat(comment.created_on)}
                    </S.ReviewNameSpan>
                  </S.ReviewName>

                  <S.ReviewText>{comment.text}</S.ReviewText>
                </S.ReviewRight>
              </S.ReviewItem>
            </S.Review>
          );
        })}
            

        </S.ModalReviews>
        </>
    );


    return(
        <S.Container>
            <Header page={"my-adv"}/>
            <main>
                <S.MainContainer>
                    <MainMenu />
                </S.MainContainer>
                <S.MainArtic>
                    <S.ArticContent>
                        <S.ArticLeft>
                            <S.ArticFillImg>
                                <S.ArticImgBlock>
                                <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                    {
                      // eslint-disable-next-line
                      ad?.images.map((item) => {
                        return(
                        <SwiperSlide>
                          <S.BigImage
                            src={`http://localhost:8090/${item.url}`}
                            alt=""
                          />
                        </SwiperSlide>)
                      })
                    }
                </Swiper>
                                </S.ArticImgBlock>
                                <S.ArticImgBar>
                                {ad?.images.length > 0 ? (
                                    <S.ArticImgBarDiv>
                                    <S.ArticImgBarDivPicture
                                        src={`http://localhost:8090/${ad?.images[0]?.url}`}
                                    />
                                    </S.ArticImgBarDiv>
                                ) : null}
                                {ad?.images.length > 1 ? (
                                    <S.ArticImgBarDiv>
                                    <S.ArticImgBarDivPicture
                                        src={`http://localhost:8090/${ad?.images[1]?.url}`}
                                    />
                                    </S.ArticImgBarDiv>
                                ) : null}
                                {ad?.images.length > 2 ? (
                                    <S.ArticImgBarDiv>
                                    <S.ArticImgBarDivPicture
                                        src={`http://localhost:8090/${ad?.images[2]?.url}`}
                                    />
                                    </S.ArticImgBarDiv>
                                ) : null}
                                {ad?.images.length > 3 ? (
                                    <S.ArticImgBarDiv>
                                    <S.ArticImgBarDivPicture
                                        src={`http://localhost:8090/${ad?.images[3]?.url}`}
                                    />
                                    </S.ArticImgBarDiv>
                                ) : null}
                                {ad?.images.length > 4 ? (
                                    <S.ArticImgBarDiv>
                                    <S.ArticImgBarDivPicture
                                        src={`http://localhost:8090/${ad?.images[4]?.url}`}
                                    />
                                    </S.ArticImgBarDiv>
                                ) : null}
                                </S.ArticImgBar>

                            </S.ArticFillImg>
                        </S.ArticLeft>
                        <S.ArticRight>
                            <S.ArticBlock>
                                <S.ArticTitle>{ad?.title}</S.ArticTitle>
                                <S.ArticInfo>
                                    <S.ArticDate>{ad ? dateFormat(ad.created_on) : null}</S.ArticDate>
                                    <S.ArticCity>{ad?.user.city}</S.ArticCity>
                                    <S.ArticLink href="#" onClick={openModalReview}>{reviewTitle(comments.length)}</S.ArticLink>
                                    <Modal isOpen={modalIsOpenReview} onRequestClose={closeModalReview} style={
                                        {
                                            content: {
                                                width: "600px",
                                                height: "800px",
                                                inset: "unset"
                                            },
                                            overlay: {
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                zIndex: 1
                                            }
                                        }
                                    }>
                                        {modalContentReviews}
                                    </Modal>
                                </S.ArticInfo>
                                <S.ArticPrice>{ad ? priceFormat(ad.price) : null} ₽</S.ArticPrice>
                                <S.ArticleBtnBlock>
                                    <S.BtnEdit onClick={openModalEdit}>Редактировать</S.BtnEdit>
                                    <Modal isOpen={modalIsOpenEdit} onRequestClose={closeModalEdit} style={
                                        {
                                            content: {
                                                width: "600px",
                                                height: "800px",
                                                inset: "unset"
                                            },
                                            overlay: {
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                zIndex: 1
                                            }
                                        }
                                    }>
                                        {modalContentEdit}
                                     </Modal>
                                    <S.BtnRemove onClick={() => 
                                        deleteAd({id: ad.id, token: token}).then((item) => {
                                            if (item?.access_token){
                                                console.log("update token");
                                                deleteAd({id: ad.id, token: item}).then(() => {
                                                    getAllAds().then((ads) => {
                                                        dispatch(setAllAds(ads))
                                                        navigate(`/`)
                                                    })
                                                })
                                            } else {
                                                getAllAds().then((ads) => {
                                                    dispatch(setAllAds(ads))
                                                    navigate(`/`)
                                                })
                                            }
                                        })}>Снять с публикации</S.BtnRemove>
                                </S.ArticleBtnBlock>
                                <S.ArticleAuthor onClick={() => {
                                    localStorage.setItem("userId", JSON.stringify(ad.user.id))
                                    navigate(`../seller`);
                                    }}>
                                    <S.AuthorImg>
                                        <S.AuthorImgPicture                       
                                            src={`http://localhost:8090/${ad?.user.avatar}`}
                                            alt="" />
                                    </S.AuthorImg>
                                    <S.AuthorContent>
                                        <S.AuthorName>{ad?.user.name}</S.AuthorName>
                                        <S.AuthorAbout>{ad ? sellsFrom(ad?.user.sells_from) : null}</S.AuthorAbout>
                                    </S.AuthorContent>
                                </S.ArticleAuthor>
                            </S.ArticBlock>
                        </S.ArticRight>
                    </S.ArticContent>
                </S.MainArtic>
                <S.MainContainerBlock>
                    <S.MainTitle>
                        Описание товара
                    </S.MainTitle>
                    <S.MainContent>
                        <S.MainText>{ad?.description}</S.MainText>
                    </S.MainContent>
                </S.MainContainerBlock>
            </main>
        </S.Container>
    )
}