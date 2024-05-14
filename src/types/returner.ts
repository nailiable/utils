export namespace Return {
  export interface Success<Data> {
    success: true;
    data: Data;
  }
  export interface Failure<Error> {
    success: false;
    error: Error;
  }
}
export type Return<Data, Error> = Return.Success<Data> | Return.Failure<Error>;
