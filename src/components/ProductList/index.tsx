import { Table } from "antd"
import { ColumnsType } from "antd/es/table";

interface ProductInfo {
    id: string;
    name: string;
    is_active: boolean;
  }

interface Props {
    data: ProductInfo[];
    columns: ColumnsType<ProductInfo>;
  }

const ProductList = ({ data, columns} : Props) => {
  const pagination = {
    pageSize: 5,
  }

    return (
      <>
      
        <Table columns={columns} dataSource={data} pagination={pagination} />

      </>

    )
}

export default ProductList
