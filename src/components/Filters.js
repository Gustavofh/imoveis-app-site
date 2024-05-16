import React, {useState} from 'react';

export function Filter() {
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [neighborhood, setNeighborhood] = useState('');
    
    const handleFilterState = (e) => {
        e.preventDefault();
        setState(state)
        console.log(state)
    }

    const handleFilterCity = (e) => {
        e.preventDefault();
        setCity(city)
        console.log(city)
    }

    const handleFilterNeighborhood = (e) => {
        e.preventDefault();
        setCity(city)
        console.log(city)
    }

    return (
        <div className='all-filters'>Include your filters!
            <form className='FilterLocationState' onSubmit={handleFilterState}>
                <input type='text' onChange={(e) => setState(e.target.value)} placeholder='Filter by state'/>
            </form>
            <form className='FilterLocationCity' onSubmit={handleFilterCity}>
                <input type='text' onChange={(e) => setCity(e.target.value)} placeholder='Filter by city'/>
            </form>
            <form className='FilterLocationNeighborhood' onSubmit={handleFilterNeighborhood}>
                <input type='text' onChange={(e) => setCity(e.target.value)} placeholder='Filter by neighborhood'/>
            </form>
        </div>
    )
}