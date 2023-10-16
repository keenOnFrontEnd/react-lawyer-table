import { TransformedDataArrayType, TransformedTableRowType, tableRowType } from "../types/types";

const dateRegex = /^(?:\d{4}-\d{2}-\d{2}|\d{2}\/\d{2}\/\d{4})$/
const licenseNumberRegex = /^[0-9A-Za-z]{6}$/;
const phoneRegex = /^(\+1)?[0-9]{10}$/

export const isValidTableRow = (items: Array<tableRowType>) => {

    let obj = {
        'Full Name': 'John Doe',
        Phone: '+12345678900',
        Email: 'johndoe@example.com',
        Age: '35',
        Experience: '10',
        'Yearly Income': '60000.00',
        'Has children': 'TRUE',
        'License states': 'California',
        'Expiration date': '2024-12-31',
        'License number': 'ABC123'
    }

    let transferedArray: TransformedDataArrayType = []

    for (let item in items) {

    }

    return items.map((item) => {
    
        })
}

export const typeValidation = (item: any) => {

    return (
        typeof item === "object" &&
        typeof item['Full Name'] === "string" &&
        (typeof item.Phone === "string" || typeof item.Phone === 'number') &&
        typeof item.Email === "string" &&
        (typeof item.Age === "number") &&
        (typeof item.Experience === "number") &&
        (typeof item['Yearly Income'] === "number") &&
        typeof item['Has children'] === "boolean" &&
        (typeof item['Expiration date'] === "string") &&
        (typeof item['License states'] === "string")
    );
}