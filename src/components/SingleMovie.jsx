import {useParams} from 'react-router-dom'
import {useFetch} from '../hooks/useFetch'

const SingleMovie = () => {

    const {id} = useParams();

const {isLoading, data} = useFetch(`&i=${id}`)

    if(isLoading){
        return(
            <div className="d-flex justify-content-center align-items-center" style={{height:'100vh'}}>
                <div className="spinner-border " role="status" style={{width: '12rem',height: '12rem'}}>
                    <span className="visually-hidden ">Loading...</span>
                </div>
            </div> 
            
        )
    }

    return ( <>
        {
            
                 !isLoading ?
                 <div className="single-movie">
                     <img src={data.Poster} alt="" />
                     <div className="single-info">
                         <h2>{data.Title}</h2>
                         <p> </p>
                         <p><strong>Country:{data.Country}</strong></p>
                         <p><strong>Director:{data.Director} </strong></p>
                         <p><strong>Released:{data.Released} </strong></p>
                         <p><strong>Runtime:{data.Runtime} </strong></p>
                         <p><strong>Year:{data.Year} </strong></p>
                     </div>
                 </div>
                 : ''
        }
    </> );
}
 
export default SingleMovie;