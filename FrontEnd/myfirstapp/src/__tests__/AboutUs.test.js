import {render} from '@testing-library/react';
import React from 'react';
import AboutUs from '../components/AboutUs/AboutUs';

test('Render_text', () => {
    const {getByText} = render(<AboutUs/>);
    const page_heading_s = getByText(/Best Sellings/i);
    const page_heading_l = getByText(/covered/i);
    const page_description_para = getByText(/Lorem ipsum dolor sit amet, consectetur adipiscing/i); 
    expect(page_heading_s).toBeInTheDocument();
    expect(page_heading_l).toBeInTheDocument();
    expect(page_description_para).toBeInTheDocument();
})

test('Render_Image', () => {
    const {getByAltText} = render(<AboutUs/>);
    const image_1 = getByAltText('book_1');
    const image_4 = getByAltText('book_4');
    expect(image_1).toHaveAttribute('src', './pics/book-1.jpg');
    expect(image_4).toHaveAttribute('src', './pics/book-4.jpg');
})