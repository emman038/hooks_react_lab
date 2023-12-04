const ColourPickerComponent = ({ red, setRed, green, setGreen, blue, setBlue, RGB }) => {
    return (
        <>
            <h2>Colour Picker Component!</h2>
            <label htmlFor="red">Red</label>
            <input
                type="range"
                id="red"
                onInput={(e) => setRed(e.target.value)}
            ></input>
            <p>Red: {red}%</p>

            <label htmlFor="green">Green</label>
            <input
                type="range"
                id="green"
                onInput={(e) => setGreen(e.target.value)}
            ></input>
            <p>Green: {green}%</p>

            <label htmlFor="blue">Blue</label>
            <input
                type="range"
                id="blue"
                onInput={(e) => setBlue(e.target.value)}
            ></input>
            <p>Blue: {blue}%</p>

            <h1 style={{ backgroundColor: RGB }}>{RGB}</h1>
        </>
    );
}

export default ColourPickerComponent;