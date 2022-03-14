import React from 'react'
import PizzaCard from './PizzaCard'

function PizzaList({pizzaList}) {
  return (
    <div>
      {pizzaList.map(pizza => (
        <PizzaCard key={pizza._id} pizza={pizza} />
      ))}
      </div>
  )
}

export default PizzaList