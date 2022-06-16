import { Box } from "@chakra-ui/react"
import { ButtonGoncy } from "./ButtonGoncy"
export const TotalProductsButtonGoncy = () => {
    return (
        <Box
            position="sticky"
            bottom="0"
            margin="auto"
            paddingBottom="16px"
        >
            <ButtonGoncy text="3 productos (total: $12)" />
        </Box>
    )
}