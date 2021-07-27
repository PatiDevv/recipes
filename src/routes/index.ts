export const routes = {
  home: '/',
  recipes: '/recipes',
  recipe: '/recipes/:id',
  notfound: '/not-found',
};

export const getRoute = {
  home: routes.home,
  recipes: routes.recipes,
  recipe: (id: string) => `${routes.recipes}/${id}`,
};
