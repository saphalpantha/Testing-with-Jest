import { fireEvent, render } from "@testing-library/react";
import Counter from "../Counter";


describe(Counter, () => {
    it("Counter display correct initial count", () => {
        const {getByTestId} = render(<Counter initialCount={0}/>)
        const countVal = Number(getByTestId("count").textContent)
        expect(countVal).toEqual(0)
    })


    it('Count should increment by 1 if the increment button is clicked', () => {
        const {getByTestId, getByRole} = render(<Counter initialCount={0}/>)




        const incButton = getByRole("button", {name:'Increment'});

        fireEvent.click(incButton)

        const countVal1 = Number(getByTestId('count').textContent);

        expect(countVal1).toEqual(1)
        
        fireEvent.click(incButton)
        const countVal2 = Number(getByTestId('count').textContent);
        expect(countVal2).toEqual(2);  
        
    })
})



