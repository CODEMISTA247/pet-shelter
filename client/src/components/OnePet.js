import React, { useState, useEffect} from 'react';
import axios from 'axios' 
import { useNavigate, useParams, Link } from 'react-router-dom'


const OnePet=(props) => {
    const {id} = useParams()
    const [pet, setPet] = useState({})
    const navigate = useNavigate()

/*     this.state = {
        clicks: 0,
        show: true
    } */


    useEffect(() => {
        axios.get(`http://localhost:8000/api/onePet/${id}`)
            .then((res) => {
                console.log(res.data);
                setPet(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [id])

/*     IncrementItem = () => {
        this.setState({ clicks: this.state.clicks + 1});
    } */

    const deletePet = () => {
        axios.delete(`http://localhost:8000/api/deletePet/${id}`)
        .then((res) => {

            console.log(res);
            navigate("/")
        })
    }

    return (
    <div className="card mb-3">
    
        <div className="card-body text-bg-secondary p-3" >
        <h3>Details About {pet.petName}</h3>
        <h5 className="card-title">Breed: {pet.petType}</h5>
        <p className="card-text">Description: {pet.petDescription}</p>
        <table class="table table-striped-columns table-bordered  ">
            <thead>
                <tr>
                    <th scope="col">Skillz: </th>
                    <th scope="col"> </th>
                    <th scope="col"> </th>
                </tr>
                <tr>
                    <td>{pet.skillOne}</td>
                    <td>{pet.skillTwo}</td>
                    <td>{pet.skillThree}</td>
                </tr>
            </thead>
        
        </table>
        <button onClick={deletePet} className="btn btn-danger">Adopt {pet.petName}</button>
        <Link to={'/'}>Head Home</Link>
        </div>
    </div>
    )


}



export default OnePet;