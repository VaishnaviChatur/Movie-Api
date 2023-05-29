import React, { useEffect } from 'react'
import './Film.css'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../store/CartSlice'
import { STATUSES, fetchProduct } from '../store/FIlmSlice'


const Film = () => {
    const dispatch = useDispatch();

    const { data: Films, status } = useSelector((state) => state.film)
        // const [Films,setFilms] = useState([])
    useEffect(() => {
        dispatch(fetchProduct());

    }, []);


    const handleAdd = (film) => {
        dispatch(addItem(film));

    };

    if (status === STATUSES.LOADING) {
        return <h2> Loading... </h2>
    }

    if (status === STATUSES.ERROR) {
        return <h2> SomeThing Wants Wrong..... </h2>
    }


    return ( 
        <div className='movie-app'>
        <div className='row'>
         {
            Films.map((film) => (
                <div className='image-container'>
                <img src = { film.Poster } className='img'
                alt = "loading img" />
                <h4> { film.Title } </h4>
  
                <button onClick = {() => handleAdd(film)} className ='btn'> Add to Favorites </button> 
</div>
              
            ))
        }
 </div>
</div>
       
    )
}

export default Film;