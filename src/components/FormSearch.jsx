import { useState, useContext } from "react";
import { useFetch } from "../hooks/useFetch";
import { DataContext } from "../context/DataContext";

const FormSearch = () => {

        const [title, setTitle] = useState('')
        
        const {setQuery, error} = useContext(DataContext)
        
        const handleSubmit = (e)  => {
            e.preventDefault()
            setQuery(title)
            console.log(title)
        }
    return (
        <>
            <div className="d-flex justify-content-center">
                <div className="form-search">
                <h2>Old Movies Finder</h2>
                    <form onSubmit={handleSubmit}>
                        <input className="border pt-3 pb-3" type="text" placeholder="Title Movie" onChange={(e)=>{setTitle(e.target.value)}}/>
                        <input className="py-3" type="submit" value='Search' />
                    </form>
                </div>
            </div>
        </>
    );
}
 
export default FormSearch;