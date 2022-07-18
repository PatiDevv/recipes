export const routes = {
  home: '/',
  all: '/all',
  recipe: '/all/:id',
  notfound: '/not-found',
  onboarding: '/onboarding',
};

export const getRoute = {
  home: routes.home,
  recipes: routes.all,
  recipe: (id: string) => `${routes.all}/${id}`,
  onboarding: routes.onboarding,
};
