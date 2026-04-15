export class Calculator {
 add(a: number, b: number): number {
  return a + b;
 }

 subtract(a: number, b: number): number {
  return a - b;
 }

 // --- DAQUI PARA BAIXO NADA TEM TESTE (Vai derrubar a cobertura para < 90%) ---

 multiply(a: number, b: number): number {
  return a * b;
 }

 divide(a: number, b: number): number {
  if (b === 0) {
   throw new Error("Cannot divide by zero"); // Branch não testada
  }
  return a / b;
 }

 // --- CÓDIGO COM CODE SMELLS E DUPLICIDADE (Para o Sonar reclamar) ---

 complexOperation(a: number, b: number): number {
  let result = 0;

  // Code smell: If e Else fazem exatamente a mesma coisa
  if (a > 0) {
   result = a + b;
  } else {
   result = a + b;
  }

  // Code smell: Variável declarada mas nunca utilizada
  const unusedVariable = "Hello Sonar";

  return result;
 }

 // Code smell: Bloco de código idêntico ao método acima (Duplicação)
 anotherComplexOperation(a: number, b: number): number {
  let result = 0;

  if (a > 0) {
   result = a + b;
  } else {
   result = a + b;
  }

  const unusedVariable = "Hello Sonar";

  return result;
 }
}