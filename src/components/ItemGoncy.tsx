import { Flex, Image } from '@chakra-ui/react'
import { Product } from '../types'
import { DescriptionGoncy } from './DescriptionGoncy'
import { TitleGoncy } from './TitleGoncy'
import { ButtonGoncy } from './ButtonGoncy'
export const ItemGoncy = ({ data }: { data: Product }) => {
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
                <TitleGoncy title={data.title} />
                <DescriptionGoncy description={data.description} />
            </Flex>
            <ButtonGoncy text="Agregar" />

        </Flex>
    )
}