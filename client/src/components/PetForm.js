import React, {useState} from 'react';
import axios from 'axios'
import {useNavigate, Link} from 'react-router-dom'


const PetForm = (props) => {
    const navigate = useNavigate()
    const {allPets, setAllPets} = props
    const [errors, setErrors] = useState({})
    const [pet, setPet] = useState({
        petName: '',
        petType: '',
        petDescription: '',
        skillOne: '',
        skillTwo: '',
        skillThree:''
    })

    const handleChange = (e) => {
        console.log(e.target.name);
        console.log(e.target.value);
        setPet({...pet, [e.target.name]: e.target.value})
    }




    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/postPet', pet)
            .then((res) => {
                setAllPets([...allPets, res.data])
                navigate('/')
                
            })
            .catch((err) => {
                console.log(err);
                // console.log(err.response.data.error.errors);
                setErrors(err.response.data.errors);
            })
    }



    return (
        <div className='d-flex justify-content-evenly'>
            
            
            
            <h1 className='text-white'>Know a Pet Needing a Home?</h1>
            <form className='w-15 text-white row g-2' onSubmit={submitHandler}>
                <label className='form-label'>Pet Name:</label>
                <input className='form-control' type="text" value={pet.petName} name='petName' onChange={handleChange}/>

                {
                    errors.petName?
                    <p className='text-warning'>{errors.petName.message}</p>:
                    null
                }
                
                
                <label className='form-label'>Breed:</label>
                <input className='form-control' type="text" value={pet.petType} name='petType' onChange={handleChange}/>

                {
                    errors.petType?
                    <p className='text-warning'>{errors.petType.message}</p>:
                    null
                }

                
                
                <label className='form-label'>Description:</label>
                <input className='form-control' type="text" value={pet.petDescription} name='petDescription' onChange={handleChange} />
                
                {
                    errors.petDescription?
                    <p className='text-warning'>{errors.petDescription.message}</p>:
                    null
                }
                
                {
                    <h2>Skillz:<p>(optional)</p></h2> 
                }
                <label className='form-label'>Skill 1:</label>
                <input className='form-control' type="text" value={pet.skillOne} name='skillOne' onChange={handleChange}/>
                
                
                {
                    errors.skillOne?
                    <p className='text-warning'>{errors.skillOne.message}</p>:
                    null
                }

                <label className='form-label'>Skill 2:</label>
                <input className='form-control' type="text" value={pet.skillTwo} name='skillTwo' onChange={handleChange}/>
                
                {
                    errors.skillTwo?
                    <p className='text-warning'>{errors.skillTwo.message}</p>:
                    null
                }
                
                <label className='form-label'>Skill 3:</label>
                <input className='form-control' type="text" value={pet.skillThree} name='skillThree' onChange={handleChange}/>
                
                {
                    errors.skillThree?
                    <p className='text-warning'>{errors.skillThree.message}</p>:
                    null
                }
                <br />
                <div>
                    <button className='btn btn-danger'>Add Pet</button>
                    <Link to={'/'}>Head Home</Link>
                </div>
            </form>
        </div>
    )

}
export default PetForm;


