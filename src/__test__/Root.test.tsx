import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Root from '../routes/Root';

describe('App test', () => {
  it('opens', async () => {
    // ARRANGE
    render(<Root />);

    // ACT
    await userEvent.click(screen.getByText('count is 0'));

    // ASSERT
    screen.getByText('count is 1');
  });
});
