/** @type {import('jest').Config} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  // Garante que a cobertura é calculada apenas sobre o código fonte
  collectCoverageFrom: ['src/**/*.ts', '!src/**/*.spec.ts'],
  coverageDirectory: 'coverage',
  coverageReporters: ['lcov', 'text'],
  // Define o patamar mínimo de 90% para falhar a esteira se necessário
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90
    }
  },
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        diagnostics: {
          ignoreCodes: [5107] // Silencia o erro de moduleResolution do TS 6
        }
      }
    ]
  }
};