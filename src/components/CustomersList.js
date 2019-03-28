import React from "react"

import style from './Customers.css'

class CustomersList extends React.Component {

    render() {

        const c = this.props.customers

        const customers = Object.keys(c).map((key, index) => (
            <div key={index} className={style.customer} onClick={() => this.props.selectCustomer(Number(key)+1)}>
                <img src={c[key].portraitSrc} className={style.portrait} />
                <p className={style.titleAndNames}>{c[key].titleAndNames}</p>
                <p className={style.dob}>{c[key].dob}</p>
                <p className={style.status}>{c[key].status}</p>
                <p className={style.annualIncome}>Annual income: <strong>£{c[key].annualIncome}</strong></p>
                <p className={style.houseNumber}>House number: <strong>{c[key].houseNumber}</strong></p>
                <p className={style.postcode}>Postcode: <strong>{c[key].postcode}</strong></p>
            </div>
        ))

        return (
            <div className={style.customersWrapper}>
                {customers}
            </div>
        )
    }
}

export default CustomersList