import { createSelector } from "reselect";

import { CategoriesState } from "./category.reducer";
import { CategoryMap } from "./category.types";
import { RootReducer } from "../store";

const categoryReducer = (state: RootReducer): CategoriesState =>
  state.categories;

export const selectCategories = createSelector(
  [categoryReducer],
  (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories): CategoryMap =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {} as CategoryMap)
);

export const selectIsLoading = createSelector(
  [categoryReducer],
  (categoriesSlice) => categoriesSlice.isLoading
);
