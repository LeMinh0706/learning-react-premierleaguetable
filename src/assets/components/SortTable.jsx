import { useState } from 'react';
import { club } from '../../data';

function SortTable() {
    let [team, setTeam] = useState(club);

    let sortTeam = () => {
        setTeam(team.sort((b, a) => a.point - b.point))
    }


    return (


        <button className='text-white border-black border-2 bg-slate-600 p-3' onClick={sortTeam}>Sort</button>

    );
}

export default SortTable;