import React from 'react';
import { useSelector } from "react-redux";
import Smurf from './Smurf';

 const SmurfList = ()=> {
    // const isLoading = false;
    // const testSmurf = {
    //     id:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
    //     name:'Poppa Smurf',
    //     position:'Village Leader',
    //     nickname: 'Pops',
    //     description: 'Papa is the practical village leader and the father figure of 100 or so young Smurfs. He is easily identified by his red Smurf hat, pants, and a shortly-trimmed white beard and moustache.'
    // }

    const data = useSelector((state) => state)

    if (!data.loading) {
        return <h1>Loading...</h1>;
    }

    return(<div className="listContainer">
        {/* <Smurf smurf={data.smurfs}/> */}
        {
            data.smurfs.map((smurf, index) => {
                return (
                    <div data-testid="smurf" className="card" key={index}>
                        <div className="card-body">
                        <h3 className="card-title">{smurf.name}</h3>
                            <hr/>
                            <p className="card-text"><b>Position:</b> {smurf.position}</p>
                            <p className="card-text"><b>Nickname:</b> {smurf.nickname}</p>
                            <p className="card-text"><b>Description:</b> {smurf.description}</p>
                        </div>
                    </div>
                )
            })
        }
    </div>);
}

export default SmurfList;

//Task List:
//1. Connect the smurfs and loading state values to the SmurfList component.
//2. Replace the single Smurf component instance with a map return a Smurf component for each entry in the smurfs list.
//3. Replace the static isLoading variable with the state loading variable.