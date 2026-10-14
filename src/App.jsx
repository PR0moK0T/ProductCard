import { useState } from 'react'
import ProductCard from './ProductCard.jsx'

function App() {
    const [count, setCount] = useState(0)

    const handleClick = () => {
        setCount(count + 1);
    }


  return (
    <>
      <div className="counter">Товаров в Корзине: {count}</div>
      <div className="cards">
        <ProductCard onBuy={handleClick} title="Пакет" image="/image/paket.jpg" price="9999.99"/>
        <ProductCard onBuy={handleClick} title="Остатки еды jpg" image="/image/food.jpg" price="100.00"/>
        <ProductCard onBuy={handleClick} title="Кот (Ласковый)" image="/image/kot.png" price="1000000.00"/>
      </div>
    </>
  )
}

export default App