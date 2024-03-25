import { useState } from "react";

export default function App() {
    const [step, setStep] = useState(1);
    const [count, setCount] = useState(0);

    const date = new Date();
    date.setDate(date.getDate() + count);

    // range event handler
    function handleRange(event) {
        setStep(Number(event.target.value));
    }

    // text input event handler
    function handleCountInput(event) {
        setCount(event.target.value ? parseInt(event.target.value) : 0);
    }

    function handleBtnReduce(e) {
        e.preventDefault();
        setCount((c) => (c ? c - step : 0));
    }

    function handleBtnAdd(e) {
        e.preventDefault();
        setCount((c) => (!c ? c + step : 0));
    }

    return (
        <form>
            <div>
                <input
                    type="range"
                    value={step}
                    onChange={(event) => handleRange(event)}
                    min={1}
                    max={10}
                />
                <span>step: {step}</span>
            </div>
            <div>
                <button onClick={handleBtnReduce}>-</button>
                <input
                    placeholder="days from today"
                    value={count}
                    onChange={handleCountInput}
                />
                <button onClick={handleBtnAdd}>+</button>
            </div>
            <div>today is {date.toLocaleDateString()}</div>
        </form>
    );
}
