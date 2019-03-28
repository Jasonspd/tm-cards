import React from "react"

import cardsAvailable from '../services/cardsAvailable'
import style from './AllCards.css'

class AllCards extends React.Component {

    render() {

        const cards = this.props.cards
        const s = this.props.state

        const result = cardsAvailable(cards, s)

        //Todo: hide cards initially, instead of the "anywhere" card showing at the initial render
        const cardsToShow = Object.keys(result).map((key, index) => (
            <div key={index} className={style.card} >
                <p className="title">{result[key].title}</p>
                <p className="apr">Apr: <strong>{result[key].apr}%</strong></p>
                <p className="b-t">Balance Transfer Offer Duration: <strong>{result[key].balanceTransferOfferDuration} months</strong></p>
                <p className="purchase">Purchase Offer Duration: <strong>{result[key].purchaseOfferDuration} Months</strong></p>
                <p className="credit">Credit Available: <strong>£{result[key].creditAvailable}</strong></p>
            </div>
        ))

        return (
            <div className={style.cardsWrapper}>
                {cardsToShow}
            </div>
        )
    }
}

export default AllCards