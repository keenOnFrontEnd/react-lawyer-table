

export interface RootState {
  root: State
}

export interface State {
  data: TransformedDataArrayType,
  headers: string[]
  isError: boolean,
}

export interface tableRowType {
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

export type DataArrayType = Array<tableRowType>

export type TransformedTableRowType = {
    [K in keyof tableRowType]: {
      value: tableRowType[K];
      isValid: boolean;
    };
  };
export type TransformedDataArrayType = Array<TransformedTableRowType>
