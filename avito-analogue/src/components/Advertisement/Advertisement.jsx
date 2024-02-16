import React from "react";
import * as S from "./Advertisement-styles";

function Advertisement({images, title, price, city, released}) {
  //1. показать изображение
  //2. формат цены
  //3. формат даты
  //4. переключение фотографий
  return (
    <S.Item>
      <S.Adv>
        <S.AdvImg>
          <S.AdvImgLink href="#">
            <S.AdvPhoto src="" />
          </S.AdvImgLink>
        </S.AdvImg>
        <S.AdvContent>
          <S.AdvContentLink>
            <S.AdvContentTitle>
              {title}
            </S.AdvContentTitle>
          </S.AdvContentLink>
          <S.AdvContentPrice>{price} ₽</S.AdvContentPrice>
          <S.AdvContentPlace>{city}</S.AdvContentPlace>
          <S.AdvContentDate>{released}</S.AdvContentDate>
        </S.AdvContent>
      </S.Adv>
    </S.Item>
  );
}
export default Advertisement;