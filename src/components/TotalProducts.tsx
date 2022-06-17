import { Box, Button } from "@chakra-ui/react"
import { useCart } from "../providers/CartProvider"
export const TotalProductsButtonGoncy = () => {
    const { cart } = useCart()
    const cantProductos = cart.length
    const precioProductos = cart.reduce((p, c) => {
        return p + c.price
    }, 0)
    return (
        <Box
            position="sticky"
            bottom="0"
            margin="auto"
            paddingBottom="16px"
        >
            <Button
                color="white"
                border="none"
                borderRadius="4px"
                backgroundColor="dodgerblue"
                fontSize="18px"
                fontWeight="500"
                cursor="default"
                padding="0 16px"
                lineHeight="48px"
            > {cantProductos} productos (total: ${precioProductos}) </Button>
        </Box>
    )
}