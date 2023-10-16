export type tableRowType = {
    fullname: Required<string>,
    phone: Required<string>,
    email: Required<string>,
    age: number,
    experience: number,
    yearlyIncome: number,
    hasChildren: boolean,
    expirationDate: string,
    licenceNumber: string
}

export type DataArrayType = Array<tableRowType>

export type TransformedTableRowType = {
    [K in keyof tableRowType]: {
      value: tableRowType[K];
      isValid: boolean;
    };
  };
export type TransformedDataArrayType = Array<TransformedTableRowType>
