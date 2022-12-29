// eslint-disable-next-line @typescript-eslint/no-namespace, @typescript-eslint/no-unused-vars
declare namespace Cypress {
  interface Chainable {
    setSliderValue(value: number): Chainable<void>;
    realType(value: string): Chainable<void>;
  }
}
