import {render} from '@testing-library/react';
import React from 'react';
import OrderComplete from './OrderComplete';

test('Render_text', () => {
    const {getByText} = render(<OrderComplete/>);
    const page_info = getByText(/we will notify you once your books are ready/i);
    const page_btn = getByText(/Back to Homepage/i)
    expect(page_info).toBeInTheDocument();
    expect(page_btn).toBeInTheDocument();
})