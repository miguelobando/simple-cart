import { Button } from "@chakra-ui/react"

export const ButtonGoncy = ({ text }: { text: string }) => {
    return (<Button
        color="white"
        border="none"
        borderRadius="4px"
        backgroundColor="dodgerblue"
        fontSize="18px"
        fontWeight="500"
        cursor="pointer"
        padding="0 16px"
        lineHeight="48px"
    > {text}
    </Button>)
}