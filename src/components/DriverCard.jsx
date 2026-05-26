import { Rating } from './Rating'

export const DriverCard = ({name, rating, img, car}) => {
    return (
        <div className='driver-card-indiv'>
            <img src={img} alt="Driver card picture" />
            <div className='driver-info'>
                <h3>{name}</h3>
                <Rating>{rating}</Rating>
                <p>{car.model} - {car.licensePlate}</p>
            </div>
        </div>
    )
}