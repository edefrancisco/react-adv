import { useEffect, useState } from 'react'
import { onChangeArgs, Product, InitialValues } from '../interfaces/interfaces';

interface useProductArgs {
    product: Product
    onChange?: (args: onChangeArgs) => void
    value?: number
    initialValues?: InitialValues
}

export const useProduct = ({ onChange, product, value = 0, initialValues }: useProductArgs) => {
    const [counter, setCounter] = useState<number>(initialValues?.count || value)

    const increaseBy = (value: number) => {
        // Mi solucion
        // const newValue = Math.max( counter + value, 0 )
        // if (initialValues?.maxCount && newValue > initialValues.maxCount) return

        let newValue = Math.max( counter + value, 0 )
        if (initialValues?.maxCount) {
            newValue = Math.min(newValue, initialValues.maxCount)
        }

        setCounter(newValue)
        onChange && onChange({ count: newValue, product })   
    }

    const reset = () => {
        setCounter(initialValues?.count || value)
    }

    useEffect(() => {
        setCounter(value)
    }, [value])

    return { 
        counter, 
        isMaxCountReach: !!initialValues?.maxCount && initialValues.maxCount === counter,
        maxCount: initialValues?.maxCount,
        increaseBy, 
        reset,
    }

}
