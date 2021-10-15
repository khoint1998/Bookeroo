import {render} from '@testing-library/react';
import React from 'react';
import CartItem from './CartItem';

test('Render_text', () => {
    const {getByText} = render(<CartItem/>);
    const page_btn_1 = getByText(/Book Details/i);
    const page_btn_2 = getByText(/Delete/i);
    expect(page_btn_1).toBeInTheDocument();
    expect(page_btn_2).toBeInTheDocument();
})
    