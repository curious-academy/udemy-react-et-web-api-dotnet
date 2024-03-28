import { memo, useState } from "react";

interface ListItemProps {
    item: string;
}

// memoize
const ListItem = memo(({item}: ListItemProps) => {
    console.log(`Rendu de ${item}`);
    return <li>{item}</li>;
})

const List = () => {
    const [counter, setCounter] = useState(0);

    return (
        <>
            <div>
                <label>{counter}</label>
                <button onClick={() => setCounter(counter + 1)} >Increment</button>
                <ul>
                    <ListItem item="Acheter des croquettes"></ListItem>
                    <ListItem item="Faire le plein" />
                    <ListItem item="Me poser sur le canapé" />
                </ul>
            </div>
        </>
    )
}

export default List;