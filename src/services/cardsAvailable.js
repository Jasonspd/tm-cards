// Todo: refactor with map/reduce/filter
const final = (cards, s) => {
    let f = []
    for(let i=0;i<cards.length;i++) {
        if(cards[i].card === 'anywhere') {
            f.push(cards[i])
        } else if(cards[i].student) {
            if(s.student) {
                f.push(cards[i])
            }
        } else if(cards[i].highIncome) {
            if(s.highIncome) {
                f.push(cards[i])
            }
        }
    }
    return f
}
export default final