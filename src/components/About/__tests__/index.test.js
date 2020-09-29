import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';
afterEach(cleanup);

describe('About component', () => {
    //renders About test : verify component is rendering 
    // First Test 
it('renders', () => { //first argument : string declares what is being tested, Second Argument callback function runs test 
    render(<About/>);
});

    //Second Test
it('matches snapshot DOM node structure', () => {
    //render About
    const { asFragment } = render(<About />);
    expect(asFragment()).toMatchSnapshot();
})


})