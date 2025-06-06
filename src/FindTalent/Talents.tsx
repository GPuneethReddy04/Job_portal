import { jobList } from "../Data/JobsData";
import { talents } from "../Data/TalentData";
import JobCard from "../FindJob/JobCard";
import Sort from "../FindJob/Sort";
import TalentCard from "./TalentCard";


const Talents = ()=>{
    return(
        <div className="p-5">
            <div className="flex  justify-between">
                <div className="text-2xl font-semibold">Talents</div>
                <Sort/>
            </div>
            <div className="mt-10 flex flex-wrap gap-8 justify-between ">
                {
                    talents.map((talent,index)=><TalentCard key={index} {...talent}/>)
                }
               
            </div>
            
        </div>
        
    )
}
export default Talents;