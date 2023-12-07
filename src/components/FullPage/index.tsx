import React from "react";
import style from "../FullPage/FullPage.module.css";
import prosmotr from "../../assets/prosmotr.png";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
export const FullPage = () => {
  const selectProp = useParams()
  console.log(selectProp.id);
  
  const property = useSelector(state => state.property.property?.find((item) => {
    if(item._id === selectProp.id){
      return item
    }
  }))

  
  return (
    <div className={style.wrapper1}>
        <div className={style.navig1}>
        <ul className={style.navig2}>
          <li>
            <span>Галерея</span>
          </li>
          <li>
            <span>О квартире</span>
          </li>
          <li>
            <span>Характеристики</span>
          </li>
          <li>
            <span>Забронировать</span>
          </li>
          <li>
            <span>Похожие квартиры</span>
          </li>
        </ul>
      </div>
      <div className={style.wrapper2}>
        <div className={style.images}>
          <img
            className={style.img1}
            src={property.img[0]}
            alt=""
          />
          <div className={style.image}>
            <img
              className={style.img2}
              src={property.img[1]}
              alt=""
            />
            <img
              className={style.img3}
              src={property.img[2]}
            />
          </div>
          <div className={style.admin}>
            <img
              className={style.avatar}
              src="https://shapka-youtube.ru/wp-content/uploads/2020/08/man-silhouette.jpg"
            />
            <div className={style.adminName}>Кокорхоева Элиза Беслановна</div>
            <div className={style.adminNumber}>☏ +7 964 057 52 58</div>
            <div className={style.adminButtons}>
              <button className={style.sendMessageForAdmin}>
                Написать специалисту
              </button>
              <button className={style.toBook}>Забронировать</button>
            </div>
          </div>
        </div>
        <div className={style.details}>
          <div className={style.text}>
            <b>4-комн. квартира, 97м², 2/7 этаж</b>
            <div>
              <b>7 000 000 ₽</b>
            </div>
          </div>

          <div className={style.text2}>
            р-н 1 микрорайон, ул. Хаджи-Бикара Муталиева, 2а <br />
            (0.2 км до центра)
            <span className={style.txtPrice}>
              <b>Рыночная цена</b>
            </span>
          </div>
          <a href="/">На карте</a>
          <div className={style.buttons}>
            <button className={style.button1}>
              {" "}
              ❤ <b>В избранное</b>{" "}
            </button>
            <button className={style.button2}>
              {" "}
              <b>⇆ Сравнить</b>
            </button>
            <button className={style.button3}>
              {" "}
              <img src="https://cdn0.iconfinder.com/data/icons/ui-elements-03/64/Share-link-social-media-1024.png" />
            </button>
            <button className={style.button4}>
              {" "}
              <img src="https://www.pngplay.com/wp-content/uploads/6/Attention-Sign-PNG.png" />
            </button>
            <span className={style.priceForBuyer}>
              {" "}
              Цена за услуги для покупателя <a href="/">70 000 ₽</a>{" "}
            </span>
          </div>
        </div>
        <div className={style.lk}>
          <div className={style.lkText}>Больше сервисов в личном кабинете</div>
          <div className={style.textLk}>
            Авторизируйтесь и экономьте время, отслеживая все действия и этапы
            сделки
          </div>
          <button className={style.signInLk}>Войти в личный кабинет</button>
        </div>
        <div className={style.discription}>
          <div className={style.discript}>
            <b>Описание</b>
          </div>
          <div className={style.views}>
            <img className={style.prosmotr} src={prosmotr} />
            15 просмотров
          </div>
          <div className={style.textDiscription}>
            Добрый день! Представляем вашему вниманию четырёхкомнатную квартиру
            в городе Магас, общей площадью <br /> 99,7 квадратных метров.
            Квартира расположена на втором этаже пятиэтажного дома. Три спальни
            и одна гостиная комната, совмещённый санитарный узел, два балкона,
            окна выходят на обе стороны, проведён качественный ремонт. В шаговой
            доступности вся необходимая для комфортной жизни инфраструктура.
            Хороший район. Документы на руках. Торг уместен. По всем вопросам
            обращаться по номеру.
          </div>
        </div>
        <div className={style.specifications}>
          <div className={style.text_specifications}>
            {" "}
            <b>Характеристики</b>
          </div>
          <div className={style.textSpecifications}>
            <div className={style.text_basic}>
              {" "}
              <b>Основное</b>{" "}
            </div>
            <div>
              <div className={style.basic_item}>
                <span>Код объекта</span> <span>10244912</span>
              </div>
              <div className={style.basic_item}>
                <span>Общая площадь</span> <span>99.7 м²</span>
              </div>
              <div className={style.basic_item}>
                <span>Ремонт</span> <span>Косметический ремонт</span>
              </div>
              <div className={style.basic_item}>
                <span>Год постройки</span> <span>2008</span>
              </div>
              <div className={style.basic_item}>
                <span>Этаж/Этажность</span> <span>2 из 7</span>
              </div>
              <div className={style.basic_item}>
                <span>Год постройки</span> <span>2008</span>
              </div>
              <div className={style.basic_item}>
                <span>Стены</span> <span>Кирпичные</span>
              </div>
              <div className={style.basic_item}>
                <span>Площадь кухни</span> <span>6 м²</span>
              </div>
            </div>
            <div>
              <div className={style.text_flat}>
                <b>О квартире</b>
              </div>
              <div className={style.flat_item}>
                <span>Комнатность</span> <span>4-комн.</span>
              </div>
              <div className={style.flat_item}>
                <span>Высота потолков</span> <span>2.5 м</span>
              </div>
              <div className={style.flat_item}>
                <span>Санузел</span> <span>Раздельный</span>
              </div>
              <div className={style.flat_item}>
                <span>Балкон</span> <span>Есть балкон</span>
              </div>
              <div className={style.flat_item}>
                <span>Материал окон</span> <span>Пластиковые</span>
              </div>
              <div className={style.flat_item}>
                <span>Солнечная сторона</span> <span>Часть окон</span>
              </div>
              <div className={style.flat_item}>
                <span>Вид из окон</span> <span>Во двор</span>
              </div>
            </div>
            <div>
              <div className={style.the_apartment_remains_for_sale}>
                <b>В квартире при продаже остается</b>
              </div>
              <div className={style.flat_item}>
                <span>Домофон</span>
              </div>
              <div className={style.flat_item}>
                <span>Железная дверь</span>
              </div>
              <div className={style.flat_item}>
                <span>Кондиционер</span>
              </div>
              <div className={style.flat_item}>
                <span>Счетчик воды</span>
              </div>
              <div className={style.flat_item}>
                <span>Подключённые сервисы</span>
                <span>Телефон, интернет, кабельное телевидение</span>
              </div>
            </div>
          </div>
          <div>
            <div className={style.of_home}>
              <b>О доме</b>
            </div>
            <div className={style.flat_item}>
              <span>Лифт</span>
              <span>Пассажирский и грузовой</span>
            </div>
            <div className={style.flat_item}>
              <span>Номер дома</span>
              <span>2а</span>
            </div>
          </div>
          <div>
            <div className={style.yard}>
              <b>Двор</b>
            </div>
            <div className={style.flat_item}>
              <span>Двор</span>
              <span>Открытый двор</span>
            </div>
            <div className={style.flat_item}>
              <span>Парковка</span>
              <span>Наземный паркинг</span>
            </div>
          </div>
          <div>
            <div className={style.free_legal_protection}>
              <b>Бесплатная юридическая защита</b> 
              </div>
              <div className={style.mini_txt}>Сделка будет безопасной</div>
           
            <div className={style.flat_item}>
              <span>
                Бесплатное юридическое сопровождение до и после сделки. <br /> Помогаем
                оформить нужные документы, <br /> защищаем интересы клиента в спорных
                ситуациях
              </span>
              <span className={style.yes}>Да</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
