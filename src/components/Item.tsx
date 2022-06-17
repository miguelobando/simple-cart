import { Button, Flex, Image, Text } from '@chakra-ui/react'
import { Product } from '../types'
import { useState } from 'react'
import { useCart } from '../providers/CartProvider'
export const Item = ({ data }: { data: Product }) => {
    const [inCart, setInCart] = useState<boolean>(false)
    const { addToCart } = useCart()
    const addAndSet = (arg: Product) => {
        addToCart(arg)
        setInCart(!inCart)
    }

    // const removeAndSet = (arg: string) => {
    //     removeFromCart(arg)
    //     setInCart(!inCart)
    // }

    return (
        <Flex display="flex"
            flexDirection="column"
            gap="16px"
        >
            <Image
                width="100%"
                object-fit="contain"
                src={data.image}
            />
            <Flex
                flexDirection="column"
                height="100px"
                gap="6px"
            >
                <Text
                    fontWeight="500"
                    fontSize="20PX"
                >
                    {data.title}
                </Text>
                <Text color="gray">
                    {data.description}
                </Text>
            </Flex>

            {(
                <Button
                    color="white"
                    border="none"
                    borderRadius="4px"
                    backgroundColor="dodgerblue"
                    fontSize="18px"
                    fontWeight="500"
                    cursor="pointer"
                    padding="0 16px"
                    lineHeight="48px"
                    onClick={() => addAndSet(data)}
                >
                    Agregar
                </Button>
            )}



        </Flex>
    )
}