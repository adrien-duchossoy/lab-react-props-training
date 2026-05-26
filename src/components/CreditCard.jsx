export const CreditCard = ({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) => {
    const lastFourDigits = number.slice(-4)
    const divStyle = {
        backgroundColor: bgColor,
        color: color,
    }
    return (
        <div className='credit-card' style={divStyle}>
            <img className="card-logo-img" 
                src={type === 'Visa' ? "../img/logo-visa.png" : "../img/logo-mastercard.png"} 
                alt={`${type} logo`} 
            />
            <p className="card-number">•••• •••• •••• {lastFourDigits}</p>
            <div className='card-details-row'>
                <span className='card-expiration-date'>Expires {expirationMonth}/{expirationYear}</span>
                <span className='card-bank'>{bank}</span>
                <span className='card-owner'>{owner}</span>
            </div>
        </div>
    )
}