import { TransformedDataArrayType, TransformedTableRowType, DataArrayType } from "../types/types"; // Замініть на ваш шлях до файлів з типами

export interface DuplicateResult {
  duplicate: boolean;
  duplicateIndex?: number;
}


const transformPhoneNumber = (phone:string | number):string | number =>{
    if (typeof phone === 'number') {
        phone = phone.toString();
      }
    const digitsOnly = phone.replace(/\D/g, '');
  
    if (digitsOnly.length === 10 || (digitsOnly.length === 11 && digitsOnly.startsWith('1'))) {
      const prefix = digitsOnly.length === 11 ? '+' : '+1';
      return `${prefix}${digitsOnly}`;
    }
    return phone; 
  }

export const findDuplicateInData = (
  email: string,
  phone: string | number,
  data: TransformedDataArrayType
): DuplicateResult => {
    for (let i = 0; i < data.length; i++) {
      const obj = data[i];
      if (obj.Email && obj.Phone) {
        const objEmail = obj.Email.value.toLowerCase();
        const objPhone = transformPhoneNumber(obj.Phone.value);
        const standardizedPhone = transformPhoneNumber(phone)
        console.count()

        if (objPhone === standardizedPhone) {
          return { duplicate: true, duplicateIndex: i };
        }
      }
    }
    return { duplicate: false };
  }