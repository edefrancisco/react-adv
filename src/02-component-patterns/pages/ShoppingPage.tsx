import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components/'
import { products } from '../data/products'
import '../styles/custom-styles.css'


const product = products[0]

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
          
          <ProductCard 
            key={product.id}
            product={product}
            className="bg-dark text-white"
            initialValues={{
              count: 4,
              maxCount: 10,
            }}
          >
            {
              ({ reset, count, increaseBy, isMaxCountReach, maxCount }) => (
                <>
                  <ProductImage className="custom-image" style={{ border: '1px dashed white', boxSizing: 'border-box', margin: '10px 0 0 10px' }} />
                  <ProductTitle className='text-bold' title={ 'ola k ase' } />
                  <ProductButtons className='custom-buttons'/>

                  <button onClick={reset}>Reset</button>
                  <button onClick={() => increaseBy(-2)}>-2</button>
                  {
                    !isMaxCountReach && <button onClick={() => increaseBy(2)}>+2</button>
                  }
                  <span>{count} - {maxCount}</span>
                </>
              )
            }
          </ProductCard>
          
        </div>
    </div>
  )
}
