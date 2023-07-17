import { useState } from "react";
import './style.css';

const Form = () => {

    const [formState, setFormState] = useState({
        name:"",
        department:"",
        rating:"",
        data:[]
    });

    const handleOnChange = (event) => {
        const {name, value} = event.target;
        setFormState({...formState, [name]:value});
    };

    const buttonFunc = (event) => {
        event.preventDefault();
        const saveData = {
            name: formState.name,
            department: formState.department,
            rating: formState.rating
        }
        const arr = formState.data;
        arr.push(saveData);
        setFormState({data : arr});
    };

    
    return(
        <div>
            <h1>Employee Feedback Form</h1>
            <form>
                <label> Name : &nbsp; &nbsp;
                    <input type={"text"} name={"name"} value={formState.name} onChange={handleOnChange} />
                </label>
                <br/><br/>
                <label> Department : &nbsp; &nbsp;
                    <input type={"text"} name={"department"} value={formState.department} onChange={handleOnChange} />
                </label>
                <br/><br/>
                <label> Rating : &nbsp; &nbsp;
                    <input type={"number"} name={"rating"} value={formState.rating} onChange={handleOnChange} />
                </label>
                <br/><br/><br/><br/>
                <button type="submit" onClick={buttonFunc}>Submit</button>
            </form>
            <div className="dataBox">
            {
                formState.data.map( (item,index)=>{
                return(
                    
                        <div className="displayBox">
                            <span>Name: {item.name} || </span>
                            <span>Department: {item.department} || </span>
                            <span>Rating: {item.rating}</span>
                        </div>
                );
                })
            }
            </div>
        </div>
    );
}

export default Form;