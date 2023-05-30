import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'


const DisplayAllPets = (props) => {
    const{allPets, setAllPets} = props

    useEffect(() => {
        axios.get('http://localhost:8000/api/allPets')
            .then((allPets) => {
                console.log(allPets);
                setAllPets(allPets.data)
                            
            })
            .catch((err) => {
                console.log(err);
            })
    })

    return (

        <div>
            <h2 className='text-white'>These Pets are looking for a new home:</h2>

            {
                allPets.map((pet) => (
                    <div key={pet._id} >
                        <table class=" table w-75 mx-auto table-bordered text-white  table-hover table-striped-columns ">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Type</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{pet.petName}</td>
                                    <td>{pet.petType}</td>
                                    <td><Link to={`/onePet/${pet._id}`}>details</Link>
                                    | <Link to={`/editPet/${pet._id}`} className="">edit</Link>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                ))
            }
        </div>
    )

    
}

export default DisplayAllPets;