import _ from 'lodash';

export const validPassword = (password) => {
    const digits = password.toString().split('');

    if (!Number.isInteger(password) || password > 999999 || password < 100000) {
        return false;
    }
    let doubledDigits = {};
    for(let index = 1; index < digits.length; index++) {
        let digit = digits[index];
        if( digit < digits[index - 1] ) {
            return false;
        }
        if(digit === digits[index - 1]) {
            if(digits[index - 2] === digit) {
                doubledDigits[digit] = false;
            }
            if(doubledDigits[digit] !== false) {
                doubledDigits[digit] = true;
            }
        }
    };

    return _.some(_.values(doubledDigits), Boolean);
}

