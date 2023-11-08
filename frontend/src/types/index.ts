export type Movie = {
  id: number;
  title: string;
  description: string;
  poster: Poster;
  comments: Comment[];
};

export type Poster = {
  url: string;
  altenativeText?: string;
};

export type Comment = {
  description: string;
  rating: number;
  //não preciso colocar a relação na tipagem
};
