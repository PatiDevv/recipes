export const routes = {
  home: '/',
  recipes: '/recipes',
  recipe: '/recipes/:id',
  notfound: '/not-found',
  menu: '/menu',
};

export const getRoute = {
  home: routes.home,
  recipes: routes.recipes,
  recipe: (id: string) => `${routes.recipes}/${id}`,
  menu: routes.menu,
};
