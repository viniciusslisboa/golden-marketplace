import { Container, ProductItem } from './styles';

const products = [
  {
    id: 1,
    img: "Img 1",
    ProductInfos: {
      name: 'Name 1',
      price: 200,
      category: 'Casual'
    }
  },
  {
    id: 2,
    img: "Img 2",
    ProductInfos: {
      name: 'Name 2',
      price: 300,
      category: 'Esportivo'
    }
  },
  {
    id: 3,
    img: "Img 3",
    ProductInfos: {
      name: 'Name 3',
      price: 200,
      category: 'Casual'
    }
  },
  {
    id: 4,
    img: "Img 4",
    ProductInfos: {
      name: 'Name 4',
      price: 200,
      category: 'Casual'
    }
  },
  {
    id: 5,
    img: "Img 5",
    ProductInfos: {
      name: 'Name 5',
      price: 200,
      category: 'Casual'
    }
  },
  {
    id: 6,
    img: "Img 6",
    ProductInfos: {
      name: 'Name 6',
      price: 200,
      category: 'Casual'
    }
  },
  {
    id: 7,
    img: "Img 7",
    ProductInfos: {
      name: 'Name 7',
      price: 200,
      category: 'Casual'
    }
  },
  {
    id: 8,
    img: "Img 8",
    ProductInfos: {
      name: 'Name 8',
      price: 200,
      category: 'Casual'
    }
  },
]

export function Products() {
  return (
    <Container>
      {products.map(product => (
        <ProductItem key={product.id}>
          <div className='img'>{product.img}</div>
          <div className='infos'>
            <h3>{product.ProductInfos.name}</h3>
            <p>R$ {product.ProductInfos.price}</p>
            <p>{product.ProductInfos.category}</p>
          </div>
        </ProductItem>
      ))}


    </Container>
  );
}