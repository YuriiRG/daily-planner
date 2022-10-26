import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Root from '../routes/Root';

describe('Basic tests', () => {
  let errorCount = 0;

  beforeEach(() => {
    errorCount = 0;
    console.warn = vi.fn(() => errorCount++);
    console.error = vi.fn(() => errorCount++);
  });

  afterEach(() => {
    expect(errorCount).toEqual(0);
    vi.resetAllMocks();
  });

  it('Creating a todo', async () => {
    render(<Root />);
    await userEvent.click(screen.getByText('Add'));
    await userEvent.type(
      screen.getByPlaceholderText('New todo text'),
      'Do some things, a test todo'
    );
    await userEvent.click(screen.getByText('Add'));
    expect(
      screen.getAllByText('Do some things, a test todo').length
    ).toBe(1);
  });
});
