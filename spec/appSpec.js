import { renderComponent , expect } from './helpers/spec_helper';
import App from '../src/components/app';

describe('App', () => {
  it('renders the page title', () => {
    console.log("Entering App test");
    const component = renderComponent('App');
    expect(component).toContain('React simple starter');
  });
});
