export const IdCard = (props) => {
    return (
        <div id="id-card">
            <div id="profile-pic">
                <img src={props.picture} alt="" />
            </div>
            <div id="fields">
                <p><span className="entry-name">First name: </span>{props.firstName}</p>
                <p><span className="entry-name">Last name : </span>{props.lastName}</p>
                <p><span className="entry-name">Gender: </span>{props.gender}</p>
                <p><span className="entry-name">Height: </span>{props.height / 100}m</p>
                <p><span className="entry-name">Birth: </span>{props.birth.toDateString()}</p>
            </div>
            
        </div>
    )
}