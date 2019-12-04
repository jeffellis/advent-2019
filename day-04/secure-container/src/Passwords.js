export const validPassword = (password) => {
    const digits = password.toString().split('');

    if (!Number.isInteger(password) || password > 999999 || password < 100000) {
        return false;
    }

    let hasDoubleDigit = false;
    for(let index = 1; index < digits.length; index++) {
        if( digits[index] < digits[index - 1] ) {
        return false;
        }
        hasDoubleDigit = hasDoubleDigit || digits[index] === digits[index - 1]; 
    };

    return hasDoubleDigit;
}

