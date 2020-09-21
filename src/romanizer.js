import _ from 'romanize';

const transform = (numbers) => {
    if (numbers === 10) {
        return "X";
    }
};

const transformRomanize = (numbers) => {
    return _(numbers);
}

export {
    transform,
    transformRomanize
}