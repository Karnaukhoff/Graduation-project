import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import * as S from "./styles/adv-styles";
import Header from "../components/Header/Header";
import MainMenu from "../components/MainMenu/MainMenu";
import { getAd, getComments, postComment } from "../api/api";
import { dateFormat, priceFormat, reviewTitle, sellsFrom } from "../usefulFunctions";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../store/slices/userSlice";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

export const Advertisement = () => {
  const [ad, setAd] = useState(null);
  const [show, setShow] = useState(false);
  const user = useSelector((state) => state.user.user);
  const token = useSelector((state) => state.user.token);
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");
  const navigate = useNavigate();
  const dispatch=  useDispatch();
  const [modalIsOpenReview, setModalIsOpenReview] = useState(false);

  useEffect(() => {
    getAd(JSON.parse(localStorage.getItem("postId"))).then((post) => {
      setAd(post);
    });
  }, []);
  useEffect(() => {
    getComments({ pk: JSON.parse(localStorage.getItem("postId")) }).then(
      (items) => {
        setComments(items);
      }
    );
  }, []);

  const openModalReview = () => {
    setModalIsOpenReview(true);
  };

  const closeModalReview = () => {
    setModalIsOpenReview(false);
    setCommentText("");
  };

  const modalContentReviews = (
    <>
      <S.ModalHeader>
        <S.ModalHeaderTitle>Отзывы о товаре</S.ModalHeaderTitle>
        <S.ModalHeaderClose
          src="/img/close_modal.png"
          alt="close"
          onClick={closeModalReview}
        />
      </S.ModalHeader>
      <S.ModalAddReviewForm>
        <S.ModalAddReviewNewArtBlock>
          <S.ModalAddReviewlabel>Добавить отзыв</S.ModalAddReviewlabel>
          <S.ModalAddReviewTextear
            cols="auto"
            rows="5"
            placeholder="Введите описание"
            value={commentText}
            onChange={(event) => setCommentText(event.target.value)}
          ></S.ModalAddReviewTextear>
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
      <ul>
        {comments.map((comment) => {
          return (
            <S.Review key={comment.id}>
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
      </ul>
      </S.ModalReviews>
    </>
  );

  return (
    <>
    <S.Container>
      <Header page={"adv"} />
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
                  <ul>
                    {
                      // eslint-disable-next-line
                      ad?.images.map((item) => {
                        return(
                          <li key={item.id}>
                        <SwiperSlide>
                          <S.BigImage
                            src={`http://localhost:8090/${item.url}`}
                            alt=""
                          />
                        </SwiperSlide>
                        </li>)
                      })
                    }
                  </ul>
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
                  <S.ArticDate>
                    {ad ? dateFormat(ad.created_on) : null}
                  </S.ArticDate>
                  <S.ArticCity>{ad?.user.city}</S.ArticCity>
                  <S.ArticLink href="#" onClick={openModalReview}>
                    {reviewTitle(comments.length)}
                  </S.ArticLink>
                  <Modal
                    isOpen={modalIsOpenReview}
                    onRequestClose={closeModalReview}
                    style={{
                      content: {
                        width: "600px",
                        height: "800px",
                        inset: "unset",
                      },
                      overlay: {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        zIndex: 1
                      },
                    }}
                  >
                    {modalContentReviews}
                  </Modal>
                </S.ArticInfo>
                <S.ArticPrice>
                  {ad ? priceFormat(ad.price) : null} ₽
                </S.ArticPrice>
                <S.ArticButton
                  onClick={() => {
                    setShow(!show);
                  }}
                >
                  {show ? `Скрыть   телефон` : `Показать    телефон`}
                  <S.ArticButtonSpan>
                    {show ? ad?.user.phone : "X XXX XXX XX XX"}
                  </S.ArticButtonSpan>
                </S.ArticButton>
                <S.ArticleAuthor
                  onClick={() => {
                    localStorage.setItem("userId", JSON.stringify(ad.user.id));
                    navigate(`../seller`);
                  }}
                >
                  <S.AuthorImg>
                    <S.AuthorImgPicture
                      src={`http://localhost:8090/${ad?.user.avatar}`}
                      alt=""
                    />
                  </S.AuthorImg>
                  <S.AuthorContent>
                    <S.AuthorName>{ad?.user.name}</S.AuthorName>
                    <S.AuthorAbout>
                      {ad ? sellsFrom(ad?.user.sells_from) : null}
                    </S.AuthorAbout>
                  </S.AuthorContent>
                </S.ArticleAuthor>
              </S.ArticBlock>
            </S.ArticRight>
          </S.ArticContent>
        </S.MainArtic>
        <S.MainContainerBlock>
          <S.MainTitle>Описание товара</S.MainTitle>
          <S.MainContent>
            <S.MainText>{ad?.description}</S.MainText>
          </S.MainContent>
        </S.MainContainerBlock>
      </main>
    </S.Container>
    </>
  );
};
