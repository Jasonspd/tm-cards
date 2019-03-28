import cardsAvailable from '../src/services/cardsAvailable'
import cards from '../src/data/Cards.json'

//Not the most robust testing

test('It should be an object', () => {

    const s  = {
        student: false,
        highIncome: false,
        selectedCustomer: 0
    }

    const func = cardsAvailable(cards, s)
    const type = typeof(func)
    expect(type).toBe('object')

})

test('"anywhere" card should be available any customer', () => {

    const s  = {
        student: false,
        highIncome: false,
        selectedCustomer: 0
    }

    const func = cardsAvailable(cards, s)
    expect(func[0].card).toBe('anywhere')

})

test('"student" card should be available if the customer is a student', () => {

    const s  = {
        student: true,
        highIncome: false,
        selectedCustomer: 0
    }

    const func = cardsAvailable(cards, s)
    expect(func[0].card).toBe('student')

})

test('"liquid" card should be available if the customer has a high income', () => {

    const s  = {
        student: false,
        highIncome: true,
        selectedCustomer: 0
    }

    const func = cardsAvailable(cards, s)
    expect(func[1].card).toBe('liquid')

})