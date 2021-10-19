import {render} from '@testing-library/react';
import React from 'react';
import Homepage from '../components/Homepage/Homepage';

test('Render_text', () => {
    const {getByText} = render(<Homepage/>);
    const page_heading_l = getByText(/Your best Bookstore/i);
    const page_heading_S = getByText(/Shop your favorite books, all in one place/i);
    expect(page_heading_l).toBeInTheDocument();
    expect(page_heading_S).toBeInTheDocument();
})