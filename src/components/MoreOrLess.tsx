import { Button, Flex, Text } from "@chakra-ui/react"
import { useEffect } from "react"
import { useCart } from "../providers/CartProvider"
import { Product } from "../types"
interface MoLInterface {
    product: Product,
    setInCart: (arg: boolean) => void
}
export const MoreOrLess = ({ product, setInCart }: MoLInterface) => {
    const { cart, addToCart, removeFromCart } = useCart()
    const productCount = cart.filter(e => e.id === product.id)
    const removeAndSet = (arg: Product) => {
        removeFromCart(product.id)
    }

    useEffect(() => {
        if (!productCount.length)
            setInCart(false)
    }, [productCount])
    return (
        <Flex
            justify="space-around"
        >
            <Button
                color="white"
                border="none"
                borderRadius="4px"
                backgroundColor="dodgerblue "
                fontSize="35px"
                fontWeight="500"
                cursor="pointer"
                padding="0 16px"
                lineHeight="48px"
                width="40%"
                onClick={() => addToCart(product)}
            >
                +
            </Button>
            <Text paddingTop="16">
                {productCount.length}
            </Text>
            <Button
                color="white"
                border="none"
                borderRadius="4px"
                backgroundColor="red"
                fontSize="35px"
                fontWeight="500"
                cursor="pointer"
                padding="0 16px"
                lineHeight="48px"
                width="40%"
                onClick={() => removeAndSet(product)}
            >
                -
            </Button>

        </Flex>
    )
}