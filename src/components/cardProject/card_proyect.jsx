import React from 'react';
import './card_proyect.css';
import DATA_P from '../../services/data_proyect'


function Cards(){
    const data =DATA_P;
    return (
        <> 
        <div className='card-container'>

               {
                   data.map((project) => (
                       <div className='project-item'>
                        <img src={project.image_page} alt={project.titulo} />                                               
                        <h5>{project.title}</h5> <p>{project.description}</p>
                        <button className='btn btn-outline-info'>
                            <a className="nav-link" href={project.url_page} target="_blank">go to</a>
                            </button>
                           
                    </div>
                ))}

                </div>

        </>
    )
}

export default Cards;