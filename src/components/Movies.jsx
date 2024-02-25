import { useContext } from "react";
import ItemMovie from "./ItemMovie";
import { DataContext } from "../context/DataContext";

const Movies = () => {

    const {isLoading, data, error} = useContext(DataContext)

if(error){
    return(
        <div className="d-flex justify-content-center" >
        <h1>El titulo que ingresaste no se encuentra o no existe</h1>
        </div>
        )
    }


    if(isLoading){
        return(
            <div className="d-flex justify-content-center align-items-center" style={{height:'100vh'}}>
            <div className="spinner-border " role="status" style={{width: '12rem',height: '12rem'}}>
                <span className="visually-hidden ">Loading...</span>
            </div>
            </div>     
        )
    }

    return ( 
        <div className="container d-flex justify-content-beetwen">
            <div className="row ms-5 ">
            {
               !isLoading ?
                    data.map(item => (
                        <ItemMovie
                        key={item.imdbID}
                        id={item.imdbID}
                        title= {item.Title}
                        year= {item.Year}
                        poster= {item.Poster}
                        type={item.Type}
                        />
                    )) : ''
           }
            </div>
        </div>
     );
}
 
export default Movies;