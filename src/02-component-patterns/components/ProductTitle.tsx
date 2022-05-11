import { CSSProperties, useContext } from 'react'
import { ProductContext } from './ProductCard'
import styles from '../styles/styles.module.css'

export interface Props { 
    className?: string 
    title?: string,
    style?: CSSProperties
}

export const ProductTitle = ({ title, className, style }: Props) => {

    const { product } = useContext(ProductContext)

    const titleToShow: string = (() => {
        if (title) return title
        else if (product.title) return product.title
        else return 'No title'
    })()

    return (
        <span className={ `${styles.productDescription} ${className}` } style={style}>
            { titleToShow }
        </span>
    )
}