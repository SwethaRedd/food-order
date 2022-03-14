import React from 'react'
import Image from "next/image"
import Link from 'next/link'
function PizzaCard({pizza}) {
  return (
    <div>
        <Link href={`/product/${pizza._id}`} passHref>
        <Image src={pizza.img} alt="" width={50} height={50} />
        </Link>
        <h1> {pizza.title}  </h1>
        <span>${pizza.prices[0]} </span>
        <p>{pizza.desc} </p>
    </div>
  )
}

export default PizzaCard