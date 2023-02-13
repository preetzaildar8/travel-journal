import React from 'react'
import Card from './Card'
import data from '../data'

export default function Hero() {
    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                {...item}
            />
        )
    })
    return(
            <section className="cards-list">
                {cards}
            </section>
    )
}