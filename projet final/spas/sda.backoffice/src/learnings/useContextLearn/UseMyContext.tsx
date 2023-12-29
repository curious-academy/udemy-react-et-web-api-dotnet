import { useState } from "react";
import { TestDeux, TestTrois, TestUn } from "./TestUn";
import { ContextState, ContextWithChangeState, MyContext } from "./my-context";

export const UseMyContext = () => {
    const [item, setItem] = useState<ContextState>({value: 'Ah que johny'});

    const contextToShare: ContextWithChangeState = {
        item,
        setItem
    }

    return (
        <>
            <MyContext.Provider value={contextToShare}>
                <TestUn></TestUn>
                <TestDeux></TestDeux>
                <TestTrois></TestTrois>
            </MyContext.Provider>
        </>
    )
}