import {render} from '@testing-library/react';
import React from 'react';
import MyLibrary from './MyLibrary';

test('Render_text', () => {
    const {getByText} = render(<MyLibrary/>);
    const page_heading = getByText(/My Library/i);
    expect(page_heading).toBeInTheDocument();
})
    