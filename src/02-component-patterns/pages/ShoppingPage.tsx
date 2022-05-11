import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components/'

const product = {
  id: '1',
  title: 'Coffee Mug - Card',
  img: './coffee-mug.png'
}

export const ShoppingPage = () => {
  return (
    <div>
        <h1>ShoppingPage</h1>
        <hr />

        <div style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}>

          <ProductCard product={product}>
            <ProductCard.Image img={product.img} />
            <ProductCard.Title />
            <ProductCard.Buttons  />
          </ProductCard>

          <ProductCard product={product}>
            <ProductImage  />
            <ProductTitle title={ 'ola k ase' } />
            <ProductButtons />
          </ProductCard>

        </div>

    </div>
  )
}
