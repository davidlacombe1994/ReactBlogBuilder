//Form/__test__/Form.test.tsx
import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Form from '../Form';

describe('Form component', () => {
  it('Form should render correctly', () => {
    render(<Form />);
    const form = screen.getByRole('generic');
    expect(form).toBeInTheDocument();
  });
});
