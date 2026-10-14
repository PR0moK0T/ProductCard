import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './ProductCard.css'

function ProductCard({onBuy, title, image, price}) {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1)
    onBuy()
  }

  return (
    <div className="card">
        <img src={image}></img>
        <p>{title}</p>
        <span>{price} ₽</span>
        <button onClick={handleClick}>Купить {count}</button>
    </div>
  )
}

export default ProductCard
