import {render} from '@testing-library/react';
import React from 'react';
import PurchaseHistoryRow from '../components/PurchaseHistory/PurchaseHistoryRow';

test('Render_text', () => {
    const {getByText} = render(<PurchaseHistoryRow/>);
    const page_btn = getByText(/Details/i);
    expect(page_btn).toBeInTheDocument();
})