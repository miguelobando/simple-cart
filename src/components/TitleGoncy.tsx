import { Text } from "@chakra-ui/react"

export const TitleGoncy = ({ title }: { title: string }) => {
    return (
        <Text
            fontWeight="500"
            fontSize="20PX"
        >
            {title}
        </Text>
    )
}