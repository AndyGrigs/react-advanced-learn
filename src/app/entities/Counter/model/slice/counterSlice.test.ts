import { counterReducer, counterActions } from './counterSlice';
import { CounterSchema } from '../types/counterSchema';

describe('counterSlice.test', () => {
    it('decrement', () => {
        const state: CounterSchema = { value: 10 };

        expect(counterReducer(state as CounterSchema, counterActions.decrement())).toEqual({
            value: 9,
        });
    });
});
describe('counterSlice.test', () => {
    it('increment', () => {
        const state: CounterSchema = { value: 10 };

        expect(counterReducer(state as CounterSchema, counterActions.increment())).toEqual({
            value: 11,
        });
    });
});
describe('counterSlice.test', () => {
    it('empty state with increment', () => {
        expect(counterReducer(undefined, counterActions.increment())).toEqual({
            value: 1,
        });
    });
});
