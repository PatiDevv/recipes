export const routes = {
  home: '/',
  recipes: '/all',
  recipe: '/all/:id',
  notfound: '/not-found',
  onboarding: '/onboarding',
};

export const getRoute = {
  home: routes.home,
  recipes: routes.recipes,
  recipe: (id: string) => `${routes.recipes}/${id}`,
  onboarding: routes.onboarding,
};
