import { Text } from "@chakra-ui/react"

export const DescriptionGoncy = ({ description }: { description: string }) => {
    return <Text color="gray">
        {description}
    </Text>
}