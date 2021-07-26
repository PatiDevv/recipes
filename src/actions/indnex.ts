export const SEARCH = "SEARCH";

interface GlobalSearchAction {
  type: typeof SEARCH;
  search: string;
}

export const globalSearch = (search: string) => {
  return {
    type: SEARCH,
    search: search,
  };
};

export type Action = GlobalSearchAction;
