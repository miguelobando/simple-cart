import { Box, Button } from "@chakra-ui/react"
export const TotalProductsButtonGoncy = () => {
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
                cursor="pointer"
                padding="0 16px"
                lineHeight="48px"
            > 3 productos (total: $12) </Button>
        </Box>
    )
}