import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

function addItems(userID, item){
    addDoc(collection(db, "items"), {
        userID: userID,
        item: item
    });

}

async function getItems(userID){
    const q = query(collection(db, "items"), where("userID", "==", userID));
    const querySnapshot = await getDocs(q);

    const items = [];

    querySnapshot.forEach((doc) => {
        items.push(doc.data(), doc.id);
    });

    return items;
}