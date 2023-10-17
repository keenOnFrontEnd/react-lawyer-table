import { TransformedDataArrayType, TtransformedTableRow, TtableRow} from '../types/types';

const dateRegex = /^(?:\d{4}-\d{2}-\d{2}|\d{2}\/\d{2}\/\d{4})$/
const licenseNumberRegex = /^[0-9A-Za-z]{6}$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

const ValueValidation = (item: TtableRow, key: keyof TtableRow, items: Array<TtableRow>):boolean => {
    let date = new Date()
    let expireDate = (new Date(item['Expiration date']) > date)

    switch (key) {
        case 'Full Name':
            return true
        case 'Phone':
            return true
        case 'Email':
            if(!emailRegex.test(item['Email'])) {
                return false
            }
            return true
        case 'Age':
            if(item['Age'] <= 21) {
                return false
            }
            return true
        case 'Experience':
            if(item['Experience'] > item['Age'] || item['Experience'] < 0) {
                return false
            }
            return true
        case 'Expiration date':
            if(!dateRegex.test(item['Expiration date']) || !expireDate) {
                return false
            }
            return true
        case 'Has children':
            return true
        case 'License number':
            if(!licenseNumberRegex.test(item['License number'])) {
                return false
            } 
            return true
        case 'License states':
            return true
        case 'Yearly Income':
            if(item['Yearly Income'] > 1000000) {
                return false
            }
            return true
    }
}

export const transferDataRows = (items: Array<TtableRow>):TransformedDataArrayType => {
    let transferedArray: TransformedDataArrayType = []
    
    for (let item of items) {
        let newObj: any = {}
    
        for (const [key, value] of Object.entries(item)) {
            const validKey = key as keyof TtableRow;
            const validatedValue = item[validKey] as TtableRow[typeof validKey];
            newObj[validKey] = {
                value: validatedValue,
                isValid: ValueValidation(item,validKey,items)
            } as TtransformedTableRow[typeof validKey]
        }
    
        transferedArray.push(newObj);
    }
    return transferedArray
}

export const inititalRequiredValidation = (item: any) => {
    return (
        (item['Full Name'].length && typeof item['Full Name'] === "string") &&
        (item?.Phone && (typeof item.Phone === "string" || typeof item.Phone === 'number')) &&
        (item.Email.length && typeof item.Email === "string")
    );
}