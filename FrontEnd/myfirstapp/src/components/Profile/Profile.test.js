import { ExpansionPanelActions } from '@material-ui/core';
import {render} from '@testing-library/react';
import React from 'react';
import Profile from './Profile';

test('Render_text', () => {
    const {getAllByText, getByText} = render(<Profile/>);
    const form_name = getAllByText(/Name:/i);
    const form_password = getByText(/Password/i);
    expect(form_name[0]).toBeInTheDocument();
    expect(form_password).toBeInTheDocument();
})

test('Render_images', () => {
    const {getByAltText} = render(<Profile/>);
    const profile_image = getByAltText('profile_image');
    const footer_image = getByAltText('footer_image');
    expect(profile_image).toHaveAttribute('src');
    expect(footer_image).toHaveAttribute('src', 'bookstore-clipart-lg.png');
})