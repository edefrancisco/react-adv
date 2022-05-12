import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components/'
import { products } from '../data/products'
import { useShoppingCart } from '../hooks/useShoppingCart'
import '../styles/custom-styles.css'


export const ShoppingPage = () => {

  const { shoppingCart, onProductCountChange } = useShoppingCart()

  return (
    <div>
        <h1>ShoppingPage</h1>
        <hr />

        <div style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}>
          {
            products.map(product => (
              <ProductCard 
                key={product.id}
                product={product}
                className="bg-dark text-white" 
                onChange={ onProductCountChange }
                value={ shoppingCart[product.id]?.count || 0 }
              >
                <ProductImage 
                  className="custom-image"  
                  style={{ border: '1px dashed white', boxSizing: 'border-box', margin: '10px 0 0 10px' }}
                />
                <ProductTitle className='text-bold' title={ 'ola k ase' } />
                <ProductButtons className='custom-buttons'/>
              </ProductCard>
            ))
          }
        </div>
        
        <div className="shopping-cart">
          {
            Object.entries(shoppingCart).map(([id, product]) => (
              <ProductCard 
                key={id}
                product={product}
                className="bg-dark text-white"
                style={{ width: '100px'}}
                value= { product.count }
                onChange={ onProductCountChange }
              >
                <ProductImage 
                  className="custom-image"  
                  style={{ border: '1px dashed white', boxSizing: 'border-box', margin: '10px 0 0 10px' }}
                />
                <ProductButtons className='custom-buttons' />
              </ProductCard>
            ))
          }
        </div>
{/* 
        <div>
          <code>
            { JSON.stringify(shoppingCart) }
          </code>
        </div> */}

    </div>
  )
}
