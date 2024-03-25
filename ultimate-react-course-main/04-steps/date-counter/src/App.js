import React from "react";
import { useState } from "react";

function App() {
    const [step, setStep] = useState(1);
    const [count, setCount] = useState(0);
    const [date, setDate] = useState(new Date());

    function dayInEng(day) {
        if (day === 0) return "Sunday";
        if (day === 1) return "Monday";
        if (day === 2) return "Tuesday";
        if (day === 3) return "Wednesday";
        if (day === 4) return "Thursday";
        if (day === 5) return "Friday";
        if (day === 6) return "Saturday";
    }

    function reduceStep() {
        if (step > 0) setStep((s) => s - 1);
    }

    function increaseStep() {
        setStep((s) => s + 1);
    }

    function minusCount() {
        if (count - step >= 0) {
            setCount((c) => c - step);
            console.log(count);
            setDate((d) => new Date(d.getTime() - step * 24 * 60 * 60 * 1000));
        }
    }

    function addCount() {
        setCount((c) => c + step);
        console.log(count);
        setDate((d) => new Date(d.getTime() + step * 24 * 60 * 60 * 1000));
    }

    return (
        <div className="container">
            <div>
                <button onClick={reduceStep}>-</button>
                <span>Step:</span>
                <span>{step}</span>
                <button onClick={increaseStep}>+</button>
            </div>
            <div>
                <button onClick={minusCount}>-</button>
                <span>Count:</span>
                <span>{count}</span>
                <button onClick={addCount}>+</button>
            </div>
            <div>
                {date.toDateString()} {dayInEng(date.getDay())}
            </div>
        </div>
    );
}

export default App;
