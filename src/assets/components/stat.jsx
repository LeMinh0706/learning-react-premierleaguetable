import { club } from "../../data";
import Avartar from "./Avatar";


function Stat() {
    const topFrag = club.reduce((TopClub, currentClub) => {
        return currentClub.point > TopClub.point ? currentClub : TopClub;
    });

    const bottomFrag = club.reduce((BottomClub, currentClub) => {
        return currentClub.point < BottomClub.point ? currentClub : BottomClub;
    });

    return (
        <div className="flex justify-between border-2 border-black border-dashed p-4">
            <div className="flex gap-2">
                <div className="flex flex-col items-start gap-4 justify-center font-semibold    ">
                    <h1>1st</h1>
                    <h2>Team: {topFrag.name}</h2>
                    <h3>Match: {topFrag.match}</h3>
                    <h3>Points: {topFrag.point}</h3>
                </div>
                <Avartar src={topFrag.img}></Avartar>
            </div>
            <div className="flex gap-2">
                <Avartar src={bottomFrag.img}></Avartar>
                <div className="flex flex-col items-end gap-4 py-2 font-semibold">
                    <h1>10th</h1>
                    <h2>Team: {bottomFrag.name}</h2>
                    <h3>Match: {bottomFrag.match}</h3>
                    <h3>Points: {bottomFrag.point}</h3>
                </div>
            </div>
        </div>
    );
}

export default Stat;