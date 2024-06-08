import React from 'react'

export default function giftDetails({ route }) {
    const { product } = route.params

    return (
        <div>{product.name}</div>
    )
}
