import { Flex, Text } from "@chakra-ui/react"

export const Header = () => {
    return (
        <Flex justifyContent="flex-start"
            width="100%"
            borderBottom="1px solid gainsboro"
        >
            <Text
                padding="16px"
                fontWeight="bold"
                fontSize="24px"
            >
                Estampitency
            </Text>
        </Flex>
    )


}
