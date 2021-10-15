import {render} from '@testing-library/react';
import React from 'react';
import BookDescription from './BookDescription';

test('Render_text', () => {
    const {getByText} = render(<BookDescription/>);
    const page_heading_1 = getByText(/Availaiblity/i);
    const page_heading_2 = getByText(/Description/i);
    const page_heading_3 = getByText(/Table of Content/i);
    expect(page_heading_1).toBeInTheDocument();
    expect(page_heading_2).toBeInTheDocument();
    expect(page_heading_3).toBeInTheDocument();
})