import { createSelector } from "reselect";

const categoryReducer = (state) => state.categories;

export const selectCategories = createSelector(
  [categoryReducer],
  (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);

export const selectIsLoading = createSelector(
  [categoryReducer],
  (categoriesSlice) => categoriesSlice.isLoading
);
