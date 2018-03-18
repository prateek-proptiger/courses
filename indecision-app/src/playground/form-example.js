const app = {
    title: 'Indecision App',
    subTitle: 'Put your life in the hands of computer !!',
    options: []
}

const formSubmit = (ev) => {
    ev.preventDefault();
    const option = ev.target.elements.option;
    if (option && option.value) {
        app.options.push(option.value);
        option.value = '';
        renderFormApp();
    }
}

const makeDecision = () => {
    const random = Math.floor(Math.random() * app.options.length);
    const option = app.options[random];
    renderFormApp();
}

const removeAll = () => {
    app.options = [];
    renderFormApp();
}

const renderFormApp = () => {
    const template2 = (
        <div>
            <h1>{app.title}</h1>
            <p>{app.subTitle}</p>
            <ol>
            {
                app.options.map((option, index) => {
                    return <li key={`option_${index}`}>{option}</li>
                })
            }
            </ol>
            <button disabled={!app.options.length} onClick={makeDecision}>What should i do ?</button>
            <button disabled={!app.options.length} onClick={removeAll}>Remove all</button>
            <form onSubmit={formSubmit}>
                <input type="text" name="option" />
                <button>Add option</button>
            </form>
        </div>
    );
    ReactDOM.render(template2, appRoot);
}

renderFormApp();
/* By default buttons inside 'form' are of type 'submit' */
/* How does React uses 'key' in re-rendering ? */