import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {useNavigate, Link, useParams} from 'react-router-dom'


const UpdatePet = (props) => {
    const { id } = useParams(); // this process is identical to the one we used with our Details.js component
    
    const [petName, setPetName] = useState("");
    const [petType, setPetType] = useState("");
    const [petDescription, setPetDescription] = useState("");
    const [skillOne, setSkillOne] = useState("");
    const [skillTwo, setSkillTwo] = useState("");
    const [skillThree, setSkillThree] = useState("");
    const [errors, setErrors] = useState("")
    /* const [pet, setPet] = useState("") */
    
    const navigate = useNavigate();
    // retrieve the current values for the product so we can fill in the form with what is in the db currently 

    useEffect(() => {
        axios.get(`http://localhost:8000/api/onePet/${id}`)
            .then(res => {
                setPetName(res.data.petName);
                setPetType(res.data.petType);
                setPetDescription(res.data.petDescription);
                setSkillOne(res.data.skillOne);
                setSkillTwo(res.data.skillTwo);
                setSkillThree(res.data.skillThree);
                /* setPet(res.data.pet) */
            })
            .catch(err => console.log(err))
    }, [id])

    const updatePet = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/updatePet/${id}`,{
            petName,
            petType,
            petDescription,
            skillOne,
            skillTwo, 
            skillThree
        })
            .then(res => {
                console.log(res);
                navigate("/"); // Takes me back to main.js
            })
            .catch(err => {
                console.log(err);
                setErrors(err.response.data.errors);
            })
                
                
    }







    return (
        <div className='d-flex justify-content-evenly'>
            
                
            <h1 className='p-3 mb-0  bg-secondary text-white'>Edit {petName}</h1>
            <form className='w-100 row g-2 align-items-center text-white' onSubmit={updatePet}>
                <label className='form-label'>Pet Name:</label>
                <input className='form-control' type="text" value={petName} name='petName' onChange={(e) => { setPetName(e.target.value)}}/>

                {
                    errors.petName?
                    <p className='text-warning'>{errors.petName.message}</p>:
                    null
                }
                
                
                <label className='form-label'>Breed:</label>
                <input className='form-control' type="text" value={petType} name='petType' onChange={(e) => { setPetType(e.target.value)}}/>

                {
                    errors.petType?
                    <p className='text-warning'>{errors.petType.message}</p>:
                    null
                }

                
                
                <label className='form-label'>Description:</label>
                <input className='form-control' type="text"  value={petDescription}  name='petDescription' onChange={(e) => { setPetDescription(e.target.value)}} />
                
                {
                    errors.petDescription?
                    <p className='text-warning'>{errors.petDescription.message}</p>:
                    null
                }
                
                {
                    <h2>Skillz:<p>(optional)</p></h2> 
                }
                <label className='form-label'>Skill 1:</label>
                <input className='form-control' type="text" value={skillOne} name='skillOne' onChange={(e) => { setSkillOne(e.target.value)}}/>
                
                
                {
                    errors.skillOne?
                    <p className='text-warning'>{errors.skillOne.message}</p>:
                    null
                }

                <label className='form-label'>Skill 2:</label>
                <input className='form-control' type="text" value={skillTwo} name='skillTwo' onChange={(e) => { setSkillTwo(e.target.value)}}/>
                
                {
                    errors.skillTwo?
                    <p className='text-warning'>{errors.skillTwo.message}</p>:
                    null
                }
                
                <label className='form-label'>Skill 3:</label>
                <input className='form-control' type="text" value={skillThree} name='skillThree' onChange={(e) => { setSkillThree(e.target.value)}}/>
                
                {
                    errors.skillThree?
                    <p className='text-warning'>{errors.skillThree.message}</p>:
                    null
                }
                
                <div>
                    <button className='btn btn-danger'>Edit Pet</button>
                    <Link to={'/'}>Head Home</Link> 
        
                    </div>
            </form>
        </div>
    )

}
export default UpdatePet;