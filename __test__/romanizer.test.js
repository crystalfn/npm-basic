import {transform, transformRomanize} from "../src/romanizer";

describe('transform', () => {
    it('should return x when input', () => {
        const result = transform(10)
        expect(result).toEqual('X');
    });

    it('should return x when input with romanize', () => {
        const result = transformRomanize(10)
        expect(result).toEqual('X');
    });
});