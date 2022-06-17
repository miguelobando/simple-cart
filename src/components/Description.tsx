import { Text } from "@chakra-ui/react"

export const Description = ({ description }: { description: string }) => {
    return <Text color="gray">
        {description}
    </Text>
}