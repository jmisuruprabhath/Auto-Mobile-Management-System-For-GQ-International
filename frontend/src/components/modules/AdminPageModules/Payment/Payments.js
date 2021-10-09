import OnlinePayView from "../Payment/OnlinePaymentsView";
// import CashPayView from "../Payment/CashPaymentsView";
import Allbtns from "../Payment/AllBtns.jsx";
//import ViewHistoryOnlinePay from "./ViewHistoryOnlinePay";

//import { Tabs, Tab } from 'react-bootstrap';

//import FeaturedInfo from "../../../common/adminView/admincomponent/featuredinfo/FeaturedInfo.jsx";

const Payments = () => {
    return (
        <div className="overview">
            <div className="card" style={{backgroundColor: ' #D3D3D3',
          backgroundImage: ' #D3D3D3'}}>
                {/* <Allbtns/> */}
                <OnlinePayView/>

                {/* <Tabs defaultActiveKey="cash" id="uncontrolled-tab-example" className="mb-3">
                    <Tab eventKey="online" title="Online Payments">
                        <OnlinePayView />
                    </Tab>
                    <Tab eventKey="cash" title="Cash Payments">
                        <CashPayView />
                    </Tab>
                    <Tab eventKey="reports" title="Reports">
                        <ViewHistoryOnlinePay />
                    </Tab>
                </Tabs> */}
            </div>
        </div>
    )

}

export default  Payments;