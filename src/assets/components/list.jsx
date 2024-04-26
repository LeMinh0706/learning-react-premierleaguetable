import React, { useState } from 'react';
import { club } from '../../data';
import Avartar from './Avatar';
import SortTable from './SortTable';


function List() {

    // club.sort((b, a) => a.point - b.point);


    const [team, setTeam] = useState()
    const [clubs, setClub] = useState()
    const [count, setCount] = useState(0)

    console.log(count);

    const sortTeamACS = () => {
        setTeam(club.sort((a, b) => b.point - a.point))
        setCount((count) => count + 1)
    }

    const sortTeamDCS = () => {
        setTeam(club.sort((a, b) => a.point - b.point))
        setCount((count) => count - 1)
    }

    const unSort = () => {
        setClub(club.sort((a, b) => a.id - b.id))
        setCount((count) => count = 0)

    }


    return (

        <div className='flex items-center justify-center flex-col-reverse gap-4'>
            {/* {club.map((data, index) => {
                return <p>{data.name}</p>
            })} */}
            <div className='flex gap-4'>

                <button className='text-white border-black border-2 bg-slate-600 p-3 font-bold' onClick={sortTeamACS}>Sắp xếp tăng</button>
                <button className='text-white border-black border-2 bg-slate-600 p-3 font-bold' onClick={unSort}>Trở lại</button>
                <button className='text-white border-black border-2 bg-slate-600 p-3 font-bold' onClick={sortTeamDCS}>Sắp xếp giảm</button>

            </div>

            <table className='border-separate'>
                <thead>
                    <tr className='bg-violet-700 text-white' >
                        <th></th>
                        <th className='p-3 border border-black'>Teams</th>
                        <th className='p-3 border border-black'>Matches</th>
                        <th className='p-3 border border-black'>Points</th>
                    </tr>
                </thead>
                <tbody>
                    {club.map((data) => {
                        return <tr key={data.id} className='font-mono odd:bg-slate-300 even:bg-slate-100 hover:opacity-70'>
                            <th><div className='w-[40px] h-[40px]'><Avartar src={data.img}></Avartar></div></th>
                            <th className='p-4'>{data.name}</th>
                            <th className='p-4'>{data.match}</th>
                            <th className='p-4'>{data.point}</th>
                        </tr>
                    })}
                </tbody>
            </table>

        </div >
    );
}

export default List;