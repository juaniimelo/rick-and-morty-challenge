import { ICharacterInfo } from "../interfaces/character-info.interface";

export class CharacterInfo implements ICharacterInfo {
  count: number;
  pages: number;
  next: number;
  prev: number;

  constructor(props: ICharacterInfo) {
    this.count = props.count;
    this.pages = props.pages;
    this.next = props.next;
    this.prev = props.prev;
  }

  serialize() {
    return {
      count: this.count,
      pages: this.pages,
      next: this.next,
      prev: this.prev,
    };
  }
}
