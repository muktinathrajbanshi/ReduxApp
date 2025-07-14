export const incNumber = (num) => {
    return {
        type:"INCREMENT",
        payload: num
    };  
};
export const decNumber = (num) => {
    return {
        type:"DECREMENT",
        payloadNum: num
    };
};

export const multNumber = (num) => {
    return {
        type:"MULTIPLY",
        payload: num
    };  
};
export const divNumber = (num) => {
    return {
        type:"DIVIDE",
        payloadNum: num
    };
};