import React, { useContext } from 'react';
import { UserDataContext } from '../contexts/UserDataContext';

export default function Home (){
    const useUserData = useContext(UserDataContext);

    return(
    <div className="container">
        <div className="row">
            <div className="col-4 mx-auto">
                <h1>About Me</h1>
                {useUserData !== undefined ? useUserData.map(user=>{
                    return (
                        <div className="card" key={user.first_name}>
                            <img src={user.profile_pciture} className="card-img-top" alt={user.first_name + user.last_name} />
                            <div className="card-body">
                                <h5 className="card-title">Howdy, I'm {user.first_name} {user.last_name}</h5>
                                <p className="card-text">I am a {user.job_title} and my favorite food is {user.favorite_food}.</p>
                            </div>
                        </div>
                    )
                }) : 'Sorry no user here'}
            </div>
        </div>
    </div>
    )
}