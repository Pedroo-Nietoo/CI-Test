export class Calculator {
 add(a: number, b: number): number {
  return a + b;
 }

 subtract(a: number, b: number): number {
  return a - b;
 }

 multiply(a: number, b: number): number {
  return a * b;
 }

 divide(a: number, b: number): number {
  if (b === 0) {
   throw new Error("Cannot divide by zero");
  }
  return a / b;
 }

 complexOperation(a: number, b: number): number {
  // eslint-disable-next-line no-useless-assignment
  let result = 0;

  if (a > 0) {
   result = a + b;
  } else {
   result = a + b;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const unusedVariable = "Hello Sonar";

  return result;
 }

 anotherComplexOperation(a: number, b: number): number {
  // eslint-disable-next-line no-useless-assignment
  let result = 0;

  if (a > 0) {
   result = a + b;
  } else {
   result = a + b;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const unusedVariable = "Hello Sonar";

  return result;
 }

 anotherComplexOperation2(a: number, b: number): number {
  // eslint-disable-next-line no-useless-assignment
  let result = 0;

  if (a > 0) {
   result = a + b;
  } else {
   result = a + b;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const unusedVariable = "Hello Sonar";

  return result;
 }
}