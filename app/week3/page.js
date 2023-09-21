import ItemList from './item-list';

export default function Page(){
    return (
        <main>
            <ItemList/>
            <h1>Shopping List</h1>
            <ul>
                <li>milk, 4 L 🥛</li>
                <li>bread 🍞</li>
                <li>eggs, dozen 🥚</li>
                <li>bananas 🍌</li>
                <li>broccoli 🥦</li>
                <li>chicken breasts, 1 kg 🍗</li>
                <li>pasta sauce 🍝</li>
                <li>spaghetti, 454 g 🍝</li>
                <li>toilet paper, 12 pack 🧻</li>
            </ul>
        </main>
    );
}