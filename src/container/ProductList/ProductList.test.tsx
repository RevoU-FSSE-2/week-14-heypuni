import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import 'jest-localstorage-mock';
import '../../../matchMedia';
import ProductList from '.';

const response = {
  "data": [
    {
      id: "7d1286c6-a39c-4954-af73-28f74828f004",
      "name": "fad",
      "is_active": true
    }
  ]
}

  globalThis.fetch = jest.fn().mockResolvedValue({
    json: () => Promise.resolve(response)
  })
  
  describe('Testing CategoryList Page', () => {
    it('Test Product Page Renders correctly', async () => {
      render(
        <MemoryRouter initialEntries={['/']}>
          <Routes>
            <Route path='/' element={<ProductList />} />
          </Routes>

        </MemoryRouter>
      )
  
      await waitFor(async () => {
        expect(globalThis.fetch).toHaveBeenCalledWith(
          `https://mock-api.arikmpt.com/api/user/category`,
          expect.objectContaining({
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer mockToken`
            }
            
          })
        );
        expect(localStorage.setItem).toHaveBeenCalledWith('authToken', 'mockToken');
        expect(screen.getByText('fad')).toBeDefined();
        expect(screen.getByText('List of Product')).toBeDefined();
        expect(screen.getByText('Action')).toBeDefined();
        expect(screen.getByText('Edit')).toBeDefined();
        expect(screen.getByText('Delete')).toBeDefined();
      });
    });
  });
  