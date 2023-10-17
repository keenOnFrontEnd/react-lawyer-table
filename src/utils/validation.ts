import { DataArrayType, TransformedDataArrayType, TransformedTableRowType, tableRowType } from '../types/types';

const dateRegex = /^(?:\d{4}-\d{2}-\d{2}|\d{2}\/\d{2}\/\d{4})$/
const licenseNumberRegex = /^[0-9A-Za-z]{6}$/;
const phoneRegex = /^(\+1)?[0-9]{10}$/
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

const ValueValidation = (item: tableRowType, key: keyof tableRowType, items: Array<tableRowType>):boolean => {
    let date = new Date()
    let expireDate = (date > new Date(item['Expiration date']))
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

export const transferDataRows = (items: Array<tableRowType>):TransformedDataArrayType => {
    let transferedArray: TransformedDataArrayType = []
    
    for (let item of items) {
        let newObj: any = {}
    
        for (const [key, value] of Object.entries(item)) {
            const validKey = key as keyof tableRowType;
            const validatedValue = item[validKey] as tableRowType[typeof validKey];

            newObj[validKey] = {
                value: validatedValue,
                isValid: ValueValidation(item,validKey,items)
            } as TransformedTableRowType[typeof validKey]
        }
    
        transferedArray.push(newObj);
    }

    console.log(transferedArray)

    return transferedArray
}

export const inititalRequiredValidation = (item: any) => {

    return (
        typeof item === "object" &&
        (item['Full Name'].length && typeof item['Full Name'] === "string") &&
        (item?.Phone && (typeof item.Phone === "string" || typeof item.Phone === 'number')) &&
        (item.Email.length && typeof item.Email === "string")
    );
}