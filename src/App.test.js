// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CoinPulse title', () => {
    render(<App />);
    const titleElement = screen.getByText(/CoinPulse/i);
    expect(titleElement).toBeInTheDocument();
});
