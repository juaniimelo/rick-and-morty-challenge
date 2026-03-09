export interface EpisodeDto {
  id: number;
  name: string;
  episode: string;
  air_date: string;
}

export interface CharacterDto {
  id: number;
  name: string;
  image: string;
  status: string;
  species: string;
  episode?: EpisodeDto[] | EpisodeDto;
}
