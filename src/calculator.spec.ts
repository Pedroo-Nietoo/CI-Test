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

 it('deve multiplicar dois números corretamente', () => {
  expect(calculator.multiply(4, 5)).toBe(20);
 });

 it('deve dividir dois números corretamente', () => {
  expect(calculator.divide(10, 2)).toBe(5);
 });

 it('deve executar a primeira operação complexa', () => {
  // Cobertura parcial: testamos apenas um branch (a > 0)
  expect(calculator.complexOperation(10, 5)).toBe(15);
 });
});