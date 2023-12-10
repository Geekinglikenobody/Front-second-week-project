import style from "../FullPage/FullPage.module.css";
// import prosmotr from "../../assets/prosmotr.png";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import image from "../../assets/image.jpg"
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { useEffect } from "react";
import { fetchProperty } from "../../features/propertySlice";
export const FullPage = () => {
  const selectProp = useParams();

  const property = useSelector((state) =>
    state.property.property?.find((item) => {
      if (item._id === selectProp.id) {
        return item;
      }
    })
  );
  console.log(property)
  const { id } = useParams();
  const dispatch = useDispatch();
  const stateProperty = useSelector((state) => state.property.property);
  const filteredDom = stateProperty.filter((i) => i._id === id);
  console.log(filteredDom, "test");

  const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  useEffect(() => {
    dispatch(fetchProperty());
  },[dispatch]);
  return (
    <div className={style.wrapper1}>
      {/* <div className={style.navig1}>
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
      </div> */}
      <div className={style.wrapper3}>
        <div className={style.images}>
          {filteredDom?.map((item) => (
            <div className={style.card_item}>
              <Slider {...settings}>
                {item.img.map((res) => (
                  <div className={style.image}>
                    <img src={res} alt="card" />
                  </div>
                ))}
              </Slider>
            </div>
          ))}
        </div>
        <div className={style.admin}>
          <img
            className={style.avatar}
            src={image}
          />
          <div className={style.adminName}>Назиров Расул</div>
          <div className={style.adminNumber}>☏ +7 928 *** ** ** </div>
          <div className={style.adminButtons}>
            <button className={style.sendMessageForAdmin}>
              Написать специалисту
            </button>
            <button className={style.toBook}>❤ <b>В избранное</b></button>
          </div>
        </div>
      </div>
      <div className={style.details}>
        <div className={style.text}>
          <b>{property?.rooms} комнатная {property?.typeProperty}, {property?.quadrature}м², {property?.floor} этаж</b>
          <div>
            <b className={style.price}>{property?.price} </b> млн руб
          </div>
        </div>

        <div className={style.text2}>
      {property?.address}
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
        <Link to={`/SignUp`}>
          {" "}
          <button className={style.signInLk}>Войти в личный кабинет</button>
        </Link>
      </div>
      <div className={style.discription}>
        <div className={style.discript}>
          <b>Описание</b>
        </div>
        <div className={style.textDiscription}>
        {property?.desc}
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
              <span>Общая площадь</span> <span>{property?.quadrature}м²</span>
            </div>
            <div className={style.basic_item}>
              <span>Ремонт</span> <span>{property?.typeRemont}</span>
            </div>
            <div className={style.basic_item}>
              <span>Этаж/Этажность</span> <span>{property?.floor} этаж</span>
            </div>
          </div>
          <div>
            <div className={style.text_flat}>
              <b>О квартире</b>
            </div>
            <div className={style.flat_item}>
              <span>Комнатность</span> <span>{property?.rooms}</span>
            </div>
            <div className={style.flat_item}>
              <span>Балкон</span> <span>Есть балкон</span>
            </div>
            <div className={style.flat_item}>
              <span>Вид из окон</span> <span>На красивейший пейзаж</span>
            </div>
          </div>
          <div>
            <div className={style.the_apartment_remains_for_sale}>
              <b>В квартире при продаже остается</b>
            </div>
            <div className={style.flat_item}>
              <span>Железная дверь</span>
            </div>
            <div className={style.flat_item}>
              <span>Кондиционер</span>
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
            <span>Адресс дома</span>
            <span>{property?.address}</span>
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
              Бесплатное юридическое сопровождение до и после сделки. <br />{" "}
              Помогаем оформить нужные документы, <br /> защищаем интересы
              клиента в спорных ситуациях
            </span>
            <span className={style.yes}>Да</span>
          </div>
        </div>
      </div>
    </div>
  );
};
