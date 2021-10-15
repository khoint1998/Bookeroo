import {render} from '@testing-library/react';
import React from 'react';
import NotificationPage from './NotificationPage';

test('Render_text', () => {
    const {getByText} = render(<NotificationPage/>);
    const page_heading = getByText(/Your Notifications/i);
    expect(page_heading).toBeInTheDocument();
})