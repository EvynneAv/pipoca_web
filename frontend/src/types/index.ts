export type Movie = {
  id: number;
  title: string;
  description: string;
  poster: Poster;
};

export type Poster = {
  url: string;
  altenativeText?: string;
};
