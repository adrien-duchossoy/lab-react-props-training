export const BoxColor = (props) => {
    const rRandom = Math.floor(Math.random() * 256)
    const gRandom = Math.floor(Math.random() * 256)
    const bRandom = Math.floor(Math.random() * 256)
    const colorToHex = (c) => {
        const hex = c.toString(16)
        return hex.length == 1 ? "0" + hex : hex
    }
    const rgbToHex = (r, g, b) => {
        return "#" + colorToHex(r) + colorToHex(g) + colorToHex(b)
    }
    const hex = `${rgbToHex(rRandom, gRandom, bRandom)}`
    const divStyle = {
        backgroundColor : `rgb(${rRandom} ${gRandom} ${bRandom})`
    }
    return (
        <div id="box-color" style={divStyle}>
            <p>rgb({rRandom}, {gRandom}, {bRandom}) <br /> {hex}</p>
        </div>
    )
}