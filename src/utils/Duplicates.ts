import { TransformedDataArrayType, TtransformedTableRow, DataArrayType } from "../types/types"; // Замініть на ваш шлях до файлів з типами

export interface DuplicateResult {
    duplicate: boolean;
    duplicateIndex?: number;
}


const transformPhoneNumber = (phone: string | number): string | number => {
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
    data: TransformedDataArrayType,
    index: number
): Array<DuplicateResult> => {
    let resArray: Array<DuplicateResult> = []
    for (let i = 0; i < data.length; i++) {
        if (i !== index) {
            const obj = data[i];
            const objEmail = obj.Email.value.toLowerCase();
            const objPhone = transformPhoneNumber(obj.Phone.value);
            const standardizedPhone = transformPhoneNumber(phone)
            
            if (objPhone === standardizedPhone || objEmail === email.toLocaleLowerCase()) {
                console.log(objEmail === email)
                resArray.push({ duplicate: true, duplicateIndex: i + 1 })
            }
        }
    }
    return resArray;
}