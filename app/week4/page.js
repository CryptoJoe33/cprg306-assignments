import NewItem from "./new-item.js";

export default function Page(){
    return (
        <main>
            <h1 className="text-pink-300 m-4 ">Add an Item!!</h1>
            <NewItem/>
        </main>
    );
}