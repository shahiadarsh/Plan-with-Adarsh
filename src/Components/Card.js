import { useState } from "react";


function Card({id,name,image,info,price, removeTour}){

    const [readmore,setReadMore] = useState(false);

    const description = readmore ? info : `${info.substring(0,200)}....`;

    function readmoreHandler(){
        setReadMore(!readmore);
    }

    return (
        <div className="card">

            <img src={image} className="image" loading="lazy"></img>

            <div className="tour-info">

                    <div className="tour-details">

                        <h4 className="tour-price">₹ {price}</h4>

                        <h4 className="tour-name">{name}</h4>

                    </div>

                    <div className="description">

                        {description}

                        <span className="read-more" onClick={readmoreHandler}>

                            {readmore ? ` Show Less` : `Read More`}

                        </span>

                    </div>
            </div>

            <button className="btn-red" onClick={() => removeTour(id)}>Not Interested</button>
        </div>
    );
}

export default Card;