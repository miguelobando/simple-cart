import { Flex, Grid } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

import api from './api'
import { Item } from './components/Item'
import { Header } from './components/Header'
import { Product } from './types'
import { TotalProductsButtonGoncy } from './components/TotalProducts'
import { Footer } from './components/Footer'
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
      <Header />
      <Grid
        padding="16px"
        flex="1"
        gridTemplateColumns="repeat(auto-fill, minmax(320px, 1fr))"
        gap="12px"
      >
        {products.map((product) => (
          <Item data={product} key={product.id} />
        ))}
      </Grid>
      <TotalProductsButtonGoncy />
      <Footer />
    </Flex >
  )
}

export default App
