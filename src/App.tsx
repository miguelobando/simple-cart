import { Flex, Grid } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

import api from './api'
import { ArticleGoncy } from './components/ArticleGoncy'
import { HeaderGoncy } from './components/HeaderGoncy'
import { Product } from './types'
import { TotalProductsButtonGoncy } from './components/TotalProductsButtonGoncy'
import { FooterGoncy } from './components/FooterGoncy'
function App() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    api.list().then(setProducts)
  }, [])

  return (
    <Flex
      flexDirection="column"
      justify-content="space-between"
    >
      <HeaderGoncy />
      <Grid
        padding="16px"
        flex="1"
        gridTemplateColumns="repeat(auto-fill, minmax(320px, 1fr))"
        gap="12px"
      >
        {products.map((product) => (
          <ArticleGoncy data={product} key={product.id} />
        ))}
      </Grid>
      <TotalProductsButtonGoncy />
      <FooterGoncy />
    </Flex >
  )
}

export default App
