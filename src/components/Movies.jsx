import { useContext } from "react";
import ItemMovie from "./ItemMovie";
import { DataContext } from "../context/DataContext";

const Movies = () => {

    const {isLoading, data} = useContext(DataContext)

    return ( 
        <div className="container">
            <div className="row justify-content-around ">
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