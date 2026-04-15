import { Calculator } from './calculator';

describe('Calculator', () => {
 let calculator: Calculator;

 beforeEach(() => {
  calculator = new Calculator();
 });

 it('deve somar dois números corretamente', () => {
  expect(calculator.add(2, 3)).toBe(5);
 });

 it('deve subtrair dois números corretamente', () => {
  expect(calculator.subtract(5, 2)).toBe(3);
 });
});