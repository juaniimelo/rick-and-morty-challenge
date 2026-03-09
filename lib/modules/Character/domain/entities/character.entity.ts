import { ICharacter } from "../interfaces/character.interface";

export class Character implements ICharacter {
  id: number;
  name: string;
  image: string;
  status: string;
  species: string;
  episode: ICharacter["episode"];

  constructor(props: ICharacter) {
    this.id = props.id;
    this.name = props.name;
    this.image = props.image;
    this.status = props.status;
    this.species = props.species;
    this.episode = props.episode ?? [];
  }

  serialize() {
    return {
      id: this.id,
      name: this.name,
      image: this.image,
      status: this.status,
      species: this.species,
      episode: this.episode,
    };
  }
}
