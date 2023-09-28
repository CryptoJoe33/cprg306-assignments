export default function Item({name, quantity, category}){
    return (
        <ul className="m-2 p-2 rounded border border-white bg-pink-400 max-w-xs text-justify">
            <li>Purchase: {name}</li>
            <li>Amount: {quantity} from category: {category}</li>
        </ul>
    );
}