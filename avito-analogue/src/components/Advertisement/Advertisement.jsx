import React from "react";
import * as S from "./Advertisement-styles";

function Advertisement({ images, title, price, city, released }) {
  //1. показать изображение
  function priceFormat(price) {
    let result = "";
    let priceLengthDevide = Math.ceil(price.toString().length / 3) + 1;
    while (price > 0) {
      if (priceLengthDevide > 2){
        result += Math.floor(price / Math.pow(10, priceLengthDevide)).toString() + " ";
        price -= Math.floor(price / Math.pow(10, priceLengthDevide))* Math.pow(10, priceLengthDevide);
        priceLengthDevide--;
      }

      if (priceLengthDevide <= 2 && price > 0) {
        result += price.toString();
        price = 0;
      }
      else if (priceLengthDevide <= 2 && price === 0) result += "000"
    }
    return result;
  }
  console.log();
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
            <S.AdvContentTitle>{title}</S.AdvContentTitle>
          </S.AdvContentLink>
          <S.AdvContentPrice>{priceFormat(price)} ₽</S.AdvContentPrice>
          <S.AdvContentPlace>{city}</S.AdvContentPlace>
          <S.AdvContentDate>{released}</S.AdvContentDate>
        </S.AdvContent>
      </S.Adv>
    </S.Item>
  );
}
export default Advertisement;
