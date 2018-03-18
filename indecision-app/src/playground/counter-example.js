const appRoot = document.getElementById('app');

let step = 1;
let count = 0;

const add = () => {
    count += step;
    renderCounterApp();
}

const subtract = () => {
    count -= step;
    renderCounterApp();
}

const reset = () => {
    count = 0;
    renderCounterApp();
}

const renderCounterApp = () => {
    const template2 = (
        <div>
            <h1>Count: {count}</h1>
            <button className="button" onClick={add}>+{step}</button>
            <button onClick={subtract}>-{step}</button>
            <button onClick={reset}>reset</button>
        </div>
    );
    ReactDOM.render(template2, appRoot);
}

renderCounterApp();
/* Since JSX is basically JS on conversion we can't use class reserved word */