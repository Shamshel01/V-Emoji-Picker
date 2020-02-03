export default interface IEmoji {
  data: string;
  category: string;
  aliases: string[];
}

export default class Emoji implements IEmoji {
  constructor(
    public data: string,
    public category: string,
    public aliases: string[]
  ) { }
}
