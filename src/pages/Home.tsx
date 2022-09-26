import React from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../redux/store";
import { selectRollData } from "../redux/rolls/selectors";
import { selectFilter } from "../redux/filter/selectors";
import { setCategoryId, setCurrentPage } from "../redux/filter/slice";
import { fetchRolls } from "../redux/rolls/asyncActions";
import {
  Sort,
  Skeleton,
  RollBlock,
  Categories,
  Pagination,
} from "../components";

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const isSearch = React.useRef(false);

  const { items, status } = useSelector(selectRollData);
  const { categoryId, sort, currentPage, searchValue } =
    useSelector(selectFilter);

  const onChangeCategory = React.useCallback((idx: number) => {
    dispatch(setCategoryId(idx));
  }, []);

  const onChangePage = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  const getRolls = async () => {
    const sortBy = sort.sortProperty.replace("-", "");
    const order = sort.sortProperty.includes("-") ? "asc" : "desc";
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const search = searchValue ? `&title=${searchValue}` : "";

    dispatch(
      fetchRolls({
        sortBy,
        order,
        category,
        search,
        currentPage: String(currentPage),
      })
    );
  };

  React.useEffect(() => {
    window.scrollTo(0, 0);
    if (!isSearch.current) {
      getRolls();
    }
    isSearch.current = false;
  }, [categoryId, sort.sortProperty, searchValue, currentPage]);

  const rolls = items.map((obj: any) => <RollBlock key={obj.id} {...obj} />);
  const skeletons = [...new Array(8)].map((_, index) => (
    <Skeleton key={index} />
  ));

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        <Sort value={sort} />
      </div>
      <h2 className="content__title">Все роллы</h2>
      {status === "error" ? (
        <div className="content__error-info">
          <h2>Произошла ошибка</h2>
          <p>Что-то пошло не так. Попробуйте повторить попытку позже</p>
        </div>
      ) : (
        <div className="content__items">
          {status === "loading" ? skeletons : rolls}
        </div>
      )}

      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </div>
  );
};

export default Home;
