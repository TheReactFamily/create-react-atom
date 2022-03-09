import { convertStringToComponent } from '../convertStringToComponent';

describe('Validate component name conversion', () => {
  it('should convert a string to a component name', () => {
    const componentName = convertStringToComponent('button.a_b');

    expect(componentName).toBe('ButtonAB');
  });
});
