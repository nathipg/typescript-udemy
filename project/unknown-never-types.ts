let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';

if(typeof userInput === 'string') {
    userName = userInput;
}

const generateError = (message: string, code: number): never => {
    throw {
        errorCode: code,
        message
    };
}

generateError('Error', 500);