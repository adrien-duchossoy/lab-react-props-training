export const Rating = ({children}) => {
    const iteratingArr = [1, 2, 3, 4, 5]
    return(
        <div className='rating'>
            {iteratingArr.map(star => {
                return star<=Math.ceil(children) ? <p key={star}>★</p> : <p key={star}>☆</p>
            }

            )}
        </div>
    )
}