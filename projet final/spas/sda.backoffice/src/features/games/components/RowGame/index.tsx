export type RowGameProp = {
    id: number,
    characterName: string,
    success: string,
    changeState ?: (id: number, newState: boolean) => void
}

/**
 * One row inside a table rows
 */
export const RowGame = (props: RowGameProp) => {
    const clickPourChangement = () => {
        if (typeof props.changeState !== 'undefined') { // type guard
            props.changeState(props.id, ! (props.success === 'true'));
        }
    };

    return (
        <>
            <tr key={props.id}>
                <td>{props.characterName}</td>
                <td>{props.success}</td>
                <td>
                    <button onClick={clickPourChangement}>Changement état</button>
                </td>
            </tr>
        </>
    )
}