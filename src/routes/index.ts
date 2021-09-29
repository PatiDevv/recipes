export const routes = {
  home: '/',
  recipes: '/recipes',
  recipe: '/recipes/:id',
  notfound: '/not-found',
  onboarding: '/onboarding',
};

export const getRoute = {
  home: routes.home,
  recipes: routes.recipes,
  recipe: (id: string) => `${routes.recipes}/${id}`,
  onboarding: routes.onboarding,
};
