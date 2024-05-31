export interface Character {
  id: string;
  name: string;
  species: string;
  status: string;
  type: string;
  gender: string;
  image: string;
}

export interface CharacterEpisodes {
  id: string;
  name: string;
  image: string;
  status: string;
  episode: Array<{
    id: string;
    name: string;
  }>;
}
