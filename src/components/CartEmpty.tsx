import React from "react";
import cartEmptyImg from "../assets/img/empty-cart.svg";
import { Link } from "react-router-dom";

const CartEmpty: React.FC = () => (
  <div className="cart cart--empty">
    <h2>
      Корзина пустая <span>😕</span>
    </h2>
    <p>
      Вероятней всего, вы ещё ничего не выбрали.
      <br />
      Для того, чтобы сделать заказ, перейди на главную страницу.
    </p>
    <img src={cartEmptyImg} alt="Empty cart" />
    <Link className="button button--black" to="/">
      <span>Вернуться назад</span>
    </Link>
  </div>
);

export default CartEmpty;
