import React from 'react'

const IndexCard= (props) => {
    const {data,index}=props


        return(
            <div className="card">
                <div className='card-number'>
                    <h2> {data[index].id}/25</h2>
                </div>
                    <h1>{data[index].name.first} {data[index].name.last}</h1> 
                    <h3><b>From:</b>{data[index].city}, {data[index].country}</h3>
                    <h3>Job Title: {data[index].title}</h3>
                    <h3>Employer:{data[index].employer}</h3>
                    <h4>Favorite Movies:</h4>
                    <ol>{data[index].favoriteMovies.map(elem => <li><span>{elem}</span></li>)}</ol>
            </div>
           
        

        )
}

export default IndexCard