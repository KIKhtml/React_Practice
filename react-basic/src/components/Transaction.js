import Item from "./Item"

const Transaction = (props) => {

    const {items} = props

    return (
        <ul className="item-list">
            {items.map((e) => {
                return <Item {...e} key={e.id}/>
            })}
        </ul>
    )
}
export default Transaction
