import React from "react"
import AllCards from "./AllCards"
import CustomersList from "./CustomersList"

class App extends React.Component {

    constructor(props) {
        super(props)

        this.selectCustomer = this.selectCustomer.bind(this);

        //Rather simple at the moment because alot of weight has to been into the data from customers.json and cards.json
        this.state = {
          student: false,
          highIncome: false,
          selectedCustomer: 0
        }
    }

    //Todo: think about using redux
    selectCustomer(customerID) {
        switch (customerID) {
            case 1:
                this.setState({
                    selectedCustomer: customerID,
                    student: false,
                    highIncome: true
                })
                break
            case 2:
                this.setState({
                    selectedCustomer: customerID,
                    student: true,
                    highIncome: true
                })
                break
            case 3:
                this.setState({
                    selectedCustomer: customerID,
                    student: false,
                    highIncome: false
                })
                break
            default:
                this.setState({
                    selectedCustomer: customerID
                })
        }
    }
    
    render() {
        return (
            <div>
                <CustomersList customers={this.props.customers} selectCustomer={this.selectCustomer}/>
                <AllCards cards={this.props.cards} state={this.state} />
            </div>
        )
    }   
}

export default App