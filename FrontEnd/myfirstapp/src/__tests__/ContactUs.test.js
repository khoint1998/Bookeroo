import {render} from '@testing-library/react';
import React from 'react';
import ContactUs from '../components/ContactUs/ContactUs';

test('Render_text', () => {
    const {getByText} = render(<ContactUs/>);
    const page_heading = getByText(/Covered/i);
    const page_bottom = getByText(/Find out more on Bookeroo/i);
    const dev_card_text_name = getByText(/Sarthak/i);
    const dev_card_text_role = getByText(/Lead Dev/i);
    expect(page_heading).toBeInTheDocument();
    expect(page_bottom).toBeInTheDocument();
    expect(dev_card_text_name).toBeInTheDocument();
    expect(dev_card_text_role).toBeInTheDocument();
})


test('Render_Image', () => {
    const {getByAltText} = render(<ContactUs/>);
    const image_1 = getByAltText('book_1');
    const image_3 = getByAltText('book_3');
    expect(image_1).toHaveAttribute('src', './pics/book-1.jpg');
    expect(image_3).toHaveAttribute('src', './pics/book-3.jpg');
})