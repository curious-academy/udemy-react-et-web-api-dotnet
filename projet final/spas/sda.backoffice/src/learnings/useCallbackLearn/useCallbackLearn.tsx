import { memo, useCallback, useState } from "react";

interface ChildProps {
    action: () => void
}

const ChildComponent = memo(({action}: ChildProps) => {
    console.info('Child component render');
    return <button onClick={action}>Increment from child</button>
});

const ParentComponent = () => {
    const [count, setCount] = useState<number>(0);

    console.info('Parent rendu');

    const incrementCount = useCallback(() => {
        setCount(count + 1);
    }, []);    

    return (
        <>
            <ChildComponent action={incrementCount}></ChildComponent>
            <button onClick={() => setCount(count + 1)}>Increment parent</button>
            <p>{count}</p>
        </>
    )
}

export default ParentComponent;