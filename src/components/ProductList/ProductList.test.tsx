import { render, screen } from '@testing-library/react';
// import { BrowserRouter } from 'react-router-dom';
import '../../../matchMedia';
import { ColumnsType } from 'antd/es/table';
import { Product } from '../../types';
import ProductList from '.';

const columns: ColumnsType<Product> = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      render: (text) => text || 'N/A',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => text || 'N/A',
    },
    {
      title: 'Status',
      dataIndex: 'is_active',
      key: 'is_active',
      render: (_, record) => (record.is_active ? 'Active' : 'Deactive')
    },
  ];

describe('Test List of Category Component', () => {

  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
        writable: true,
        value: jest.fn().mockImplementation(query => ({
          matches: false,
          media: query,
          onchange: null,
          addListener: jest.fn(), // Deprecated
          removeListener: jest.fn(), // Deprecated
          addEventListener: jest.fn(),
          removeEventListener: jest.fn(),
          dispatchEvent: jest.fn(),
        })),
      });
  })

    it('Testing Header Column', () => {
        render(<ProductList columns={columns} data={[]} />)

        columns.map((column) => {
            if(column.title) {
                const title = screen.getByText(column.title.toString())
                expect(title).toBeDefined()
            }
        });
    });
})