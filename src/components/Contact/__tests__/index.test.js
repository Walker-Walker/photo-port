import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';

afterEach(cleanup)

describe('Contact component', () => {
    it('renders', () => {
        render(<Contact/>);
    });

    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<Contact />);
        expect(asFragment()).toMatchSnapshot();
    })
})

describe(' h1 tag matches Contact me' , () => {
    it ('testing matches string', () => {

         const { getByTestId } = render(<Contact 

    />);
    expect(getByTestId('testContact')).toHaveTextContent('Contact me');
    })

})

describe(' button element matches Submit' , () => {
    it ('testing matches string', () => {

         const { getByTestId } = render(<Contact 

    />);
    expect(getByTestId('testButton')).toHaveTextContent('Submit');
    })

})
// In the next test, use the data-testid attribute for the <h1> tag in 
// the ContactForm component to match the text content to be "Contact me".