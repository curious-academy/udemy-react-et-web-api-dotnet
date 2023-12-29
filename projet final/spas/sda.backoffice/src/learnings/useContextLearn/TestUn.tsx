import { useMyContext } from "./my-context";

export const TestUn = () => {
    const context = useMyContext();

    return (
        <div>
            <h1>Test 1</h1>
            <div>{context.item.value}</div>
        </div>
    );
}

export const TestDeux = () => {
    const context = useMyContext();

    return (
        <div>
            <h1>Test 2</h1>
            <div>{context.item.value}</div>
        </div>
    );
}

export const TestTrois = () => {
    const context = useMyContext();

    const clickToChange = () => {
        if (context.setItem !== null ) {
            context.setItem({value: 'Ceci est test'})
        }
    }

    return (
        <div>
            <h1>Test 3</h1>
            <div>
                <input type="text" value={context.item.value}></input>
                <button type="button" onClick={clickToChange}>Change</button>
            </div>
        </div>
    );
}