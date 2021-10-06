export class Movie {
  private _title: string;
  public get title(): string {
    return this._title;
  }
  public set title(title: string) {
    this._title = title;
  }

  private _actors: string[];
  public get actors(): string[] {
    return this._actors;
  }
  public set actors(authors: string[]) {
    this._actors = authors;
  }
}
