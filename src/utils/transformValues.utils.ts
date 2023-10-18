import { stateMap } from "../types/constants";

export const convertStateNames = (input: string): string  => {
    const states: string[] = input.split('|').map(state => state.trim());
   
    const convertedStates: string[] = states.map(state => stateMap[state] || state);

    return convertedStates.join(' | ');
}
export const transformPhoneNumber = (phone: string | number): string | number => {
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


