// src/utils/dice.test.js
import { rollDice } from './dice.js';

describe('Dice Roller', () => {
    it('should return a number between 1 and 6', async () => {
        const result = await rollDice();
        
        expect(result).toBeGreaterThanOrEqual(1);
        expect(result).toBeLessThanOrEqual(6);
        expect(Number.isInteger(result)).toBe(true);
    });
});