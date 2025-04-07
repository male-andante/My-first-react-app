import { fireEvent, render, screen } from '@testing-library/react';
import { describe, test, expect, it } from 'vitest';
import App from './App';



describe('Renderizzazione Welcome', () => {
  it('renders Welcome component', () => {
    render(<App />);
    const mainHeader = screen.getByText(/Welcome to ReactBooks/i);
    expect(mainHeader).toBeInTheDocument();
  });

  test('test renderizzazione tutte le 150 card history', () => {
    render(<App />);
    const bookCards = screen.getAllByTestId('book-card');
    expect(bookCards.length).toBeGreaterThan(149);
  });
});

describe('filter testing', () => {
  it("filters books when searching", () => {
    render(<App />);
    const filterInput = screen.getByPlaceholderText(/filtra/i);
    fireEvent.change(filterInput, { target: { value: 'history' } });
    const bookCards = screen.getAllByTestId('book-card');
    expect(bookCards.length).toBeGreaterThan(0);
  });
});

describe('SingleBook testing', () => {
  it('highlights book when clicked', () => {
    render(<App />);
    const bookCards = screen.getAllByTestId('book-card');
    fireEvent.click(bookCards[0]);
    expect(bookCards[0]).toHaveStyle('border: 3px solid red');
  });

  test('changes selection when clicking different books', () => {
    render(<App />);
    const bookCards = screen.getAllByTestId('book-card');
    fireEvent.click(bookCards[0]);
    expect(bookCards[0]).toHaveStyle('border: 3px solid red');
    fireEvent.click(bookCards[1]);
    expect(bookCards[0]).not.toHaveStyle('border: 3px solid red');
    expect(bookCards[1]).toHaveStyle('border: 3px solid red');
  });
});

describe('Tests sulla renderizzazione dei commenti', () => {
  it('No commenti mostrati al caricamento della pagina', () => {
    render(<App />);
    const allTheBookComments = screen.queryAllByTestId('single-comment');
    expect(allTheBookComments).toHaveLength(0);
  });

  test('renders comments clicking on a valid book', async () => {
    render(<App />);
    const allTheBookCards = screen.getAllByTestId('book-card');
    const firstBookCard = allTheBookCards[0];
    fireEvent.click(firstBookCard);
    const allTheBookComments = await screen.findAllByTestId('single-comment');
    expect(allTheBookComments).not.toHaveLength(0);
  });
});