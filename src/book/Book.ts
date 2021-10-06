export class Book {
  private _title: string;
  public get title(): string {
    return this._title;
  }
  public set title(title: string) {
    this._title = title;
  }

  private _authors: string[];
  public get authors(): string[] {
    return this._authors;
  }
  public set authors(authors: string[]) {
    this._authors = authors;
  }

  private _publicationDate: Date;
  public get publicationDate(): Date {
    return this._publicationDate;
  }
  public set publicationDate(publicationDate: Date) {
    this._publicationDate = publicationDate;
  }
}
