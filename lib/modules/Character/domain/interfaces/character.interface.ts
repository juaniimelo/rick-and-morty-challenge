import { IEntity } from "@/lib/types/common.type";

export interface IEpisode {
  id: number;
  name: string;
  episode: string;
  air_date: string;
}

export interface ICharacter extends IEntity {
  name: string;
  image: string;
  status: string;
  species: string;
  episode: IEpisode[];
}
