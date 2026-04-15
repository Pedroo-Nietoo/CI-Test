import { Calculator } from './calculator';

describe('Calculator', () => {
 let calculator: Calculator;

 beforeEach(() => {
  calculator = new Calculator();
 });

 it('deve cobrir operações básicas', () => {
  expect(calculator.add(2, 3)).toBe(5);
  expect(calculator.subtract(5, 2)).toBe(3);
  expect(calculator.multiply(4, 5)).toBe(20);
  expect(calculator.divide(10, 2)).toBe(5);
 });

 it('deve lançar erro ao dividir por zero', () => {
  expect(() => calculator.divide(10, 0)).toThrow("Cannot divide by zero");
 });

 it('deve cobrir todos os caminhos de complexOperation', () => {
  // Testa o branch 'if (a > 0)'
  expect(calculator.complexOperation(10, 5)).toBe(15);
  // Testa o branch 'else'
  expect(calculator.complexOperation(1, 3)).toBe(4);
 });
});