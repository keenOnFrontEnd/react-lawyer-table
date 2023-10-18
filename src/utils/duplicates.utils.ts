import { TransformedDataArrayType} from "../types/types"; // Замініть на ваш шлях до файлів з типами
import { transformPhoneNumber } from "./transformValues.utils";

export interface DuplicateResult {
    duplicate: boolean;
    duplicateIndex?: number;
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
                resArray.push({ duplicate: true, duplicateIndex: i + 1 })
            }
        }
    }
    return resArray;
}