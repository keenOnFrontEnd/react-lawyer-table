export interface IRootState {
  root: IState
}

export interface IState {
  data: TransformedDataArrayType,
  headers: string[]
  isError: boolean,
}

export type TtableRow = {
    'Full Name': string;
    'Phone': string | number;
    'Email': string;
    'Age': number;
    'Experience': number;
    'Yearly Income': number;
    'Has children': boolean;
    'License states': string;
    'Expiration date': string;
    'License number': string;
  }

export type DataArrayType = Array<TtableRow>

export type TtransformedTableRow = {
  [K in keyof TtableRow]: {
    value: TtableRow[K];
    isValid: boolean;
  };
};
export type TransformedDataArrayType = Array<TtransformedTableRow>
