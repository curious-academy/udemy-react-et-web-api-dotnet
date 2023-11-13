export type RowGameProp = {
    id: number,
    characterName: string,
    success: string
}

/**
 * One row inside a table rows
 */
export const RowGame = (props: RowGameProp) => {
    return (
        <>
            <tr key={props.id}><td>{props.characterName}</td><td>{props.success}</td></tr>
        </>
    )
}