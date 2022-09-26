import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const FullRoll: React.FC = () => {
  const [roll, setRoll] = React.useState<{
    imageUrl: string;
    title: string;
    description: string;
    price: number;
    weight: number;
    kilocalories: number;
    proteins: number;
    fats: number;
    carbohydrates: number;
  }>();
  const { rollId } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchRoll() {
      try {
        const { data } = await axios.get(
          `https://6305a4b9dde73c0f8448f624.mockapi.io/items/` + rollId
        );
        setRoll(data);
      } catch (error) {
        alert("Ошибка при получении пиццы!");
        navigate("/");
      }
    }

    fetchRoll();
  }, []);

  if (!roll) {
    return <>"Загрузка..."</>;
  }
  return (
    <div className="container">
      <div>
        <Link to="/">
          <button className="button button--outline button--add">
            <span>Назад</span>
          </button>
        </Link>
      </div>
      <div className="container--fullRoll">
        <div className="fullRoll-block">
          <img className="fullRoll-block__image" src={roll.imageUrl} />
        </div>
        <div className="fullRoll-block__info">
          <h2 className="fullRoll-block__title">{roll.title}</h2>
          <p className="fullRoll-block__description">Вес: {roll.weight} г</p>
          <h3 className="fullRoll-block__name">Состав: </h3>
          <p className="fullRoll-block__description">{roll.description}</p>
          <h3 className="fullRoll-block__name">
            Энергетическая ценность на 100 гр:
          </h3>
          <div className="fullRoll-block__grid">
            <p className="fullRoll-block__energy">Жиры: {roll.fats} </p>
            <p className="fullRoll-block__energy"> Белки: {roll.proteins} </p>
            <p className="fullRoll-block__energy">
              {" "}
              Углеводы: {roll.carbohydrates}{" "}
            </p>
            <p className="fullRoll-block__energy">
              {" "}
              Ккал: {roll.kilocalories}{" "}
            </p>
          </div>
          <h4 className="fullRoll-block__price">{roll.price} ₽</h4>
        </div>
      </div>
    </div>
  );
};

export default FullRoll;
