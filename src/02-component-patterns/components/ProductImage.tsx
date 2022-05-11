import { CSSProperties, useContext } from 'react';
import { ProductContext } from './ProductCard'
import noImage from '../assets/no-image.jpg'
import styles from '../styles/styles.module.css'

export interface Props {
    img?: string
    className?: string,
    style?: CSSProperties
}

export const ProductImage = ({ img = '', className, style }: Props) => {

    const { product } = useContext(ProductContext)

    const imgToShow: string = (() => {
        if (img) return img
        else if (product.img) return product.img
        else return noImage
    })()

    return (
        <img 
            src={ imgToShow }
            alt="Imagen del producto"
            className={ `${styles.productImg} ${className}` } 
            style={style}
        />
    )
}
