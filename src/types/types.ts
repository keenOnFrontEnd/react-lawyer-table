export type tableRowType = {
    fullname: Required<string>,
    phone: Required<string | number>,
    email: Required<string>,
    age: number,
    experience: number,
    yearlyIncome: number,
    hasChildren: boolean,
    expirationDate: string,
    licenceNumber: string
} 
export type DataArrayType = Array<tableRowType>
