export class Book {
  private _title: string;
  get title(): string {
    return this._title;
  }
  set title(title: string) {
    this._title = title;
  }

  private _authors: string[];
  get authors(): string[] {
    return this._authors;
  }
  set authors(authors: string[]) {
    this._authors = authors;
  }

  private _publicationDate: Date;
  get publicationDate(): Date {
    return this._publicationDate;
  }
  set publicationDate(publicationDate: Date) {
    this._publicationDate = publicationDate;
  }
}
