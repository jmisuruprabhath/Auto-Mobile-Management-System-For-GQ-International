import "./Chart.css"

import FeaturedInfo from "../../../../common/adminView/admincomponent/featuredinfo/FeaturedInfo";
import Chart from "../../../../common/adminView/admincomponent/charts/charts";
import {userData} from "../../../../../dummyData";



export default function overview() {
    return (
        <div className="card" style={{backgroundColor:'#DDDDDD'}}>
        <div className="overview" style={{width:'100%'}}>
            <FeaturedInfo/>
            <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
            <div className="HomeWidgets">
            <br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </div>
        </div>
        </div>
    )
}
