import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Roll, SearchRollParams } from "./types";

export const fetchRolls = createAsyncThunk<Roll[], SearchRollParams>(
  "roll/fetchRollsStatus",
  async (params) => {
    const { sortBy, order, category, search, currentPage } = params;
    const { data } = await axios.get<Roll[]>(
      `https://6305a4b9dde73c0f8448f624.mockapi.io/items?page=${currentPage}&limit=8&${category}&sortBy=${sortBy}&order=${order}&${search}`
    );
    return data;
  }
);
