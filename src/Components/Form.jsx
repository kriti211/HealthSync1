import '../App.css'
import { useState } from "react";
const Form = () => {

    const [values, setValues] = useState({
        Name:'',
        age:'',
        weight:'',
        height:'',
        bloodgrp:'',
        allergie:'',
        surgery:'',
        mentalhealth:'',
        cognitivefun:'',
        gender:'',
        consumption:'',
        diet:'',
        activity:'',
        sleep:'',
        heredity:''

        })
    
        const handleChanges = (e) =>{
          setValues({...values,[e.target.name]:[e.target.value]})
        }
    
        const handleSubmut =(e) =>{
          e.preventDefault()
          console.log(values)
        }
    
        const ResetFun = () =>{
          setValues({name:'',age:'',weight:'',height:''})
        }

    return (
        <>
        <div className="Container">
      <h1>Form in React</h1>

      <form onSubmit={handleSubmut}>
        <label htmlFor="Name">Name*</label>
        <input type="text" placeholder='Enter the name' name='Name'
        onChange={(e) => handleChanges(e)} required value={values.Name}/>

        <label htmlFor="age">Age*</label>
        <input type="number" placeholder='Enter the Age' name='age'
         onChange={(e) => handleChanges(e)} value={values.age}/>

        <label htmlFor="weight">Weight*</label>
        <input type="number" placeholder='Enter the Weight' name='weight'
         onChange={(e) => handleChanges(e)} required value={values.weight}/>
         
        <label htmlFor="height">Height*</label>
        <input type="text" placeholder='Enter the Height' name='height'
         onChange={(e) => handleChanges(e)} required value={values.height}/>

        <label htmlFor="bloodgrp">Blood Group*</label>
        <select name="bloodgrp" id="bloodgrp"  onChange={(e) => handleChanges(e)}>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
        </select>

        <label htmlFor="allergie">Allergie*</label>
        <input type="text" placeholder='Enter the allergie' name='allergie'
         onChange={(e) => handleChanges(e)} required value={values.allergie}/>

        <label htmlFor="surgery">Past surgery*</label>
        <input type="radio" name="surgery" 
         onChange={(e) => handleChanges(e)}/> yes
        <input type="text" name="surgery"
         onChange={(e) => handleChanges(e)} />no

        <label htmlFor="mentalhealth">Mental Health*</label>
        <select name="mentalhealth" id="mentalhealth" onChange={(e) => handleChanges(e)}>
            <option value="Stress">Stress</option>
            <option value="Depression">Depression</option>
        </select>

        <label htmlFor="cognitivefun">Cognitive Health*</label>
        <select name="cognitivefun" id="cognitivefun" onChange={(e) => handleChanges(e)}>
            <option value="Memory">Memory issues</option>
            <option value="Concentration">Concentration problem</option>
        </select>

        <label htmlFor="gender" >Gender*</label>
        <input type="radio" name='gender' 
         onChange={(e) => handleChanges(e)}/>Male
        <input type="radio" name='gender'
         onChange={(e) => handleChanges(e)}/>Female
        <input type="radio" name='gender' 
         onChange={(e) => handleChanges(e)}/>Other

        <h1>Lifestyle information</h1>

        <label htmlFor="consumption">Any Consumption</label>
        <select name="consumption" id="consumption" onChange={(e) => handleChanges(e)}>
            <option value="Alcohol">Alcohol</option>
            <option value="Smoking">Smoking</option>
            <option value="Drug">Drug</option>
            <option value="Nothing">Nothing</option>
        </select>

        <label htmlFor="diet">Diet Habit</label>
        <select name="diet" id="diet" onChange={(e) => handleChanges(e)}>
            <option value="Vegetarian">Vegitarian</option>
            <option value="Vegan">Vegan</option>
            <option value="Drug">Drug</option>
            <option value="Nothing">Nothing</option>
        </select>

        <label htmlFor="activity">Physical Activity</label>
        <select name="activity" id="activity" onChange={(e) => handleChanges(e)}>
            <option value="Sedentary">Sedentary</option>
            <option value="Moderate">Moderate</option>
            <option value="Active">Active</option>
            <option value="Nothing">Nothing</option>
        </select>

        <label htmlFor="sleep">Sleeping hours</label>
        <input type="number" placeholder="enter sleeping hours" name="sleep"
        onChange={(e) => handleChanges(e)}/>

        <label htmlFor="heredity">Heredity Disease </label>
        <select name="heredity" id="heredity" onChange={(e) => handleChanges(e)}>
            <option value="Diabetes">Diabetes</option>
            <option value="Heart">Heart disease</option>
            <option value="Cancer">Cancer</option>
            <option value="Nothing">Nothing</option>
        </select>

        
        <button type='button' onClick={ResetFun}>Reset</button>
        <button type='submit'>Submit</button>

      </form>
    </div>
        </>
    )
}
export default Form;