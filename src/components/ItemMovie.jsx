import { Link } from "react-router-dom";

const ItemMovie = ({id,title,type,poster,year}) => {
    return ( 
    <article className="col-4 mb-4 ">
        <div className="card " style={{width: '18rem'}}>
            <div className="card-body">
                <img src={poster} className="card-img-top" style={{height:'18rem'}} alt="" />
                <h5 className="card-title">{title}</h5>
                <p className="card-text"><span>{year}</span></p>
                <p className="card-text"><span>{type}</span></p>
                <Link to={`/movies/${id}`}>
                <a className="btn btn-primary">Go somewhere</a>
                </Link>
            </div>
        </div>
    </article> );
}
 
export default ItemMovie;