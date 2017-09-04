import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';

const API_KEY = "AIzaSyDd22cVMf8SsP28BINxavXwxVFuOsWwA8A";
describe('App' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('renders something', () => {
    expect(component).to.exist;
  });
});
