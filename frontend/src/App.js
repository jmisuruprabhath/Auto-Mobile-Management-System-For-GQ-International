/*import React from 'react';

//import NavBar from './components/common/customerView/NavBar';
import NavBar from './components/common/adminView/NavBar';
import FooterPage from './components/common/customerView/Footer';
import SlideShow from './components/Pages/SlideShow/SlideShow';
import {BrowserRouter ,  Switch, Route } from 'react-router-dom';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
//import Debtpay from './components/Pages/CR/PayForm';
import Stock from '../../frontend/src/components/modules/AdminPageModules/Stock/stock.js';
import createStock from '../../frontend/src/components/modules/AdminPageModules/Stock/createStock';
import editStocks from '../../frontend/src/components/modules/AdminPageModules/Stock/editStocks';
import stockDetails from '../../frontend/src/components/modules/AdminPageModules/Stock/stockDetails';
//import backDrop from '../../frontend/src/components/common/customerView/backDrop';
//import sideDrawer from '../../frontend/src/components/common/customerView/sideDrawer';
//screens
import ItemHomeScreen from './screens/ItemHomeScreen';
import ItemScreen from './screens/ItemScreen';
//import CartScreen from './screens/CartScreen';
//import Item from './components/modules/AdminPageModules/Stock/createItem';

import Deficit from './components/modules/AdminPageModules/Stock/deficit';
import CreateDeficits from './components/modules/AdminPageModules/Stock/CreateDeficits';
import editDeficits from './components/modules/AdminPageModules/Stock/editDeficits';
import deficitDetails from './components/modules/AdminPageModules/Stock/deficitDetails';
import createItem from './components/modules/AdminPageModules/Stock/createItem';
import editItem from './components/modules/AdminPageModules/Stock/editItem';
import Item from './components/modules/AdminPageModules/Stock/item';
import itemDetails from './components/modules/AdminPageModules/Stock/itemDetails';

function App() {
  
  return (
   
    <BrowserRouter>
        <NavBar/>
        <sideDrawer/>
        <backDrop/>
        
        <Switch>

        
        
          <Route path="/Stock" component={Stock}>
            <Stock/>
          </Route>

            <Route path="/AddStock" component={createStock}>
            
            </Route>

            <Route path="/EditStock/:id" component={editStocks}>
            
            </Route>

            <Route path="/StockDetails/:id" component={stockDetails}>
            
            </Route>
            
            
            <Route exact path="/item" component={ItemHomeScreen}>
            </Route>
              
            <Route path="/AddItem" component={createItem}>
            
            </Route>
            
            <Route path="/EditItem/:id" component={editItem}>
            
            </Route>
            
            <Route path="/viewItem" component={Item}>

            </Route>
            <Route exact path="/item/:id" component={ItemScreen}>
            </Route>

            <Route path="/itemDetails/:id" component={itemDetails}>
            
            </Route>

            <Route path="/Deficit" component={Deficit}>

            </Route>

            <Route path="/AddDeficit" component={CreateDeficits}>
            
            </Route>

            <Route path="/EditDeficit/:id" component={editDeficits}>
            
            </Route>

            <Route path="/DeficitDetails/:id" component={deficitDetails}>
            
            </Route>

        

         
        </Switch>

        


        <FooterPage/>
    </BrowserRouter>
    

   
  );
}

export default App; 

*/

import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Sidebar from "./components/common/adminView/admincomponent/Sidebar/Sidebar";
import "./appa.css";
import Overview from "./components/Pages/Admin/adminpages/overview/Overview";
import Topbar from "./components/common/adminView/admincomponent/topbar/Topbar";
import { BrowserRouter, Route } from "react-router-dom";
import EmpAdd from "./components/Pages/Admin/adminpages/EmployeeDetails/EmpAdd";
//import EmpEdit from "./components/Pages/Admin/adminpages/EmployeeDetails/EmpEdit";
import EditEmployee from "./components/modules/AdminPageModules/Employee/EditEmployee";
import EmployeeDetails from "./components/modules/AdminPageModules/Employee/EmployeeDetails";
import Attendance from "./components/modules/AdminPageModules/Employee/Attendance";
import Salary from "./components/modules/AdminPageModules/Employee/Salary";
import AddAttendance from "./components/modules/AdminPageModules/Employee/AddAttendance";
import EditAttendance from "./components/modules/AdminPageModules/Employee/EditAttendance";
import AddSalary from "./components/modules/AdminPageModules/Employee/AddSalary";
import EditSalary from "./components/modules/AdminPageModules/Employee/EditSalary";
import AttendanceDetails from "./components/modules/AdminPageModules/Employee/AttendanceDetails";
import SalaryDeatils from "./components/modules/AdminPageModules/Employee/SalaryDeatils";
import Employeee from "./components/Pages/Admin/adminpages/overview/Employeee";
import SalaryReport from "./components/modules/AdminPageModules/Employee/SalaryReport";
import Attrepo from "./components/modules/AdminPageModules/Employee/AttendanceReport";
import ManualReport from "./components/modules/AdminPageModules/Employee/ManualReport";
/* stocks */
import Stock from "../../frontend/src/components/modules/AdminPageModules/Stock/stock.js";
import CreateStock from "../../frontend/src/components/modules/AdminPageModules/Stock/createStock";
import EditStocks from "../../frontend/src/components/modules/AdminPageModules/Stock/editStocks";
import StockDetails from "../../frontend/src/components/modules/AdminPageModules/Stock/stockDetails";
import CreateItem from "./components/modules/AdminPageModules/Stock/createItem";
import EditItem from "./components/modules/AdminPageModules/Stock/editItem";
import Item from "./components/modules/AdminPageModules/Stock/item";
import ItemDetails from "./components/modules/AdminPageModules/Stock/itemDetails";

/*Stock report */
import StockReport from "./components/modules/AdminPageModules/Stock/stockReport";
import ManualStockReport from "./components/modules/AdminPageModules/Stock/manualStockReport";
/*Deficits */
import Deficit from "./components/modules/AdminPageModules/Stock/deficit";
import CreateDeficits from "./components/modules/AdminPageModules/Stock/CreateDeficits";
import EditDeficits from "./components/modules/AdminPageModules/Stock/editDeficits";
import DeficitDetails from "./components/modules/AdminPageModules/Stock/deficitDetails";

/*Orders */
import OrderHome from "./components/modules/AdminPageModules/Order/Home";
import CreatePost from "./components/modules/AdminPageModules/Order/CreatePost";
import EditPost from "./components/modules/AdminPageModules/Order/EditPost";
import PostDetails from "./components/modules/AdminPageModules/Order/PostDetails";
import Shopping from "./components/modules/AdminPageModules/Order/shoppingItems";
import EditCart from "./components/modules/AdminPageModules/Order/editCartOrder";
import OrderReport from "./components/modules/AdminPageModules/Order/orderReport";
/*import OrderShoppingReport from "./components/modules/AdminPageModules/Order/orderShoppingReport"; */

/*payment*/

import Payments from "./components/modules/AdminPageModules/Payment/Payments";
import CashPayment from "./components/modules/AdminPageModules/Payment/CashPayment";
import CashPaymentsView from "./components/modules/AdminPageModules/Payment/CashPaymentsView.jsx";
import OnlinePaymentsView from "./components/modules/AdminPageModules/Payment/OnlinePaymentsView.jsx";
import UpdateCashPay from "./components/modules/AdminPageModules/Payment/UpdateCashPay";
import UpdateOnlinePay from "./components/modules/AdminPageModules/Payment/UpdateOnlinePay";
import OnlinePaySpecificView from "./components/modules/AdminPageModules/Payment/OnlinePaySpecificView";
import CashPaySpecificView from "./components/modules/AdminPageModules/Payment/CashPaySpecificView";
import ViewHistoryCashPay from "./components/modules/AdminPageModules/Payment/ViewHistroyCashPay";
import ViewHistoryOnlinePay from "./components/modules/AdminPageModules/Payment/ViewHistoryOnlinePay";

/*client relation */
import MainCR from "./components/modules/AdminPageModules/ClientRelation/MainCR";
import EditDebt from "./components/modules/AdminPageModules/ClientRelation/EditDebtor";
import AddDebtor from "./components/modules/AdminPageModules/ClientRelation/AddDebtor";
import TestOrder from "./components/modules/AdminPageModules/ClientRelation/testOrder";
import CreatePreorder from "./components/modules/AdminPageModules/ClientRelation/CreatePreorder";
import ReportPreOrderView from "./components/modules/AdminPageModules/ClientRelation/ReportPreOrderView";
import PostDebtor from "./components/modules/AdminPageModules/ClientRelation/PostDebtor";
//import PostPreOrder from './components/modules/AdminPageModules/ClientRelation/PostPreorderInvoice';

/*Supplier*/
//import ViewSupplier from './components/modules/AdminPageModules/Supplier/SupplierView/viewSupplier';
//import ViewUpcoming from'./components/modules/AdminPageModules/Supplier/UpcomingView/viewUpcoming';
import AllSupplier from "./components/modules/AdminPageModules/Supplier/SupplierView/AllSupplier";
import AllUpcomming from "./components/modules/AdminPageModules/Supplier/UpcomingView/AllUpcoming";
import ReportsPage from "./components/modules/AdminPageModules/Supplier/reportView/ReportPage";
import ReportsPage2 from "./components/modules/AdminPageModules/Supplier/reportView/ReportUpcome";

/*Expense */
import AdminExpensesPage from "./components/Pages/Admin/AdminExpenses/AdminExpensePage";
import AddExpense from "./components/Pages/Admin/AdminExpenses/AddExpense";
import EditExpense from "./components/Pages/Admin/AdminExpenses/EditExpense";
import ExpenseDetails from "./components/Pages/Admin/AdminExpenses/ExpenseDetails";
import ExpenseReport from "./components/Pages/Admin/AdminExpenses/ExpensesFullReport";
//import manualStockReport from "./components/modules/AdminPageModules/Stock/manualStockReport";

//admin login
import Login from "./components/common/adminView/login/adminlogin";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/">
        <div className="cardview3">
          <Container>
            <Row>
              <Col xs={0} md={2}></Col>
              <Col>
                <Login />
                <br />
                <br />
                <br />
              </Col>
            </Row>
          </Container>
        </div>
      </Route>

      <Route exact path="/overview">
        <div className="cardview3">
          <Container>
            <Topbar />
            <Row>
              <Col xs={0} md={2}>
                <Sidebar />
              </Col>
              <Col>
                <Overview />
              </Col>
            </Row>
          </Container>
        </div>
      </Route>

      <Route path="/allEmp">
        <div className="cardview3">
          <Container>
            <Topbar />
            <Row>
              <Col xs={0} md={2}>
                <Sidebar />
              </Col>
              <Col>
                <Employeee />
              </Col>
            </Row>
          </Container>
        </div>
      </Route>

      <Route path="/add">
        <div className="cardview3">
          <Container>
            <Topbar />
            <Row>
              <Col xs={0} md={2}>
                <Sidebar />
              </Col>
              <Col>
                <EmpAdd />
              </Col>
            </Row>
          </Container>
        </div>
      </Route>

      <Route path="/salrepo">
        <div className="cardview3">
          <Container>
            <Topbar />
            <Row>
              <Col xs={0} md={2}>
                <Sidebar />
              </Col>
              <Col>
                <SalaryReport />
              </Col>
            </Row>
          </Container>
        </div>
      </Route>

      <Route path="/edit/:id">
        <div className="cardview3">
          <Container>
            <Topbar />
            <Row>
              <Col xs={0} md={2}>
                <Sidebar />
              </Col>
              <Col>
                <EditEmployee />
              </Col>
            </Row>
          </Container>
        </div>
      </Route>

      <Route path="/employee/:id">
        <div className="cardview3">
          <Container>
            <Topbar />
            <Row>
              <Col xs={0} md={2}>
                <Sidebar />
              </Col>
              <Col>
                <EmployeeDetails />
              </Col>
            </Row>
          </Container>
        </div>
      </Route>

      <Route path="/viewAttendance">
        <div className="cardview3">
          <Container>
            <Topbar />
            <Row>
              <Col xs={0} md={2}>
                <Sidebar />
              </Col>
              <Col>
                <Attendance />
              </Col>
            </Row>
          </Container>
        </div>
      </Route>

      <Route path="/viewSalary">
        <div className="cardview3">
          <Container>
            <Topbar />
            <Row>
              <Col xs={0} md={2}>
                <Sidebar />
              </Col>
              <Col>
                <Salary />
              </Col>
            </Row>
          </Container>
        </div>
      </Route>

      <Route path="/addAttendance">
        <div className="cardview3">
          <Container>
            <Topbar />
            <Row>
              <Col xs={0} md={2}>
                <Sidebar />
              </Col>
              <Col>
                <AddAttendance />
              </Col>
            </Row>
          </Container>
        </div>
      </Route>

      <Route path="/editAttendance/:id">
        <div className="cardview3">
          <Container>
            <Topbar />
            <Row>
              <Col xs={0} md={2}>
                <Sidebar />
              </Col>
              <Col>
                <EditAttendance />
              </Col>
            </Row>
          </Container>
        </div>
      </Route>

      <Route path="/addSalary">
        <div className="cardview3">
          <Container>
            <Topbar />
            <Row>
              <Col xs={0} md={2}>
                <Sidebar />
              </Col>
              <Col>
                <AddSalary />
              </Col>
            </Row>
          </Container>
        </div>
      </Route>

      <Route path="/editSalary/:id">
        <div className="cardview3">
          <Container>
            <Topbar />
            <Row>
              <Col xs={0} md={2}>
                <Sidebar />
              </Col>
              <Col>
                <EditSalary />
              </Col>
            </Row>
          </Container>
        </div>
      </Route>

      <Route path="/attendance/:id">
        <div className="cardview3">
          <Container>
            <Topbar />
            <Row>
              <Col xs={0} md={2}>
                <Sidebar />
              </Col>
              <Col>
                <AttendanceDetails />
              </Col>
            </Row>
          </Container>
        </div>
      </Route>

      <Route path="/esal/:id">
        <div className="cardview3">
          <Container>
            <Topbar />
            <Row>
              <Col xs={0} md={2}>
                <Sidebar />
              </Col>
              <Col>
                <SalaryDeatils />
              </Col>
            </Row>
          </Container>
        </div>
      </Route>

      <Route path="/attrepo">
        <div className="cardview3">
          <Container>
            <Topbar />
            <Row>
              <Col xs={0} md={2}>
                <Sidebar />
              </Col>
              <Col>
                <Attrepo />
              </Col>
            </Row>
          </Container>
        </div>
      </Route>

      <Route path="/spcnote">
        <div className="cardview3">
          <Container>
            <Topbar />
            <Row>
              <Col xs={0} md={2}>
                <Sidebar />
              </Col>
              <Col>
                <ManualReport />
              </Col>
            </Row>
          </Container>
        </div>
      </Route>

      {/**Stocks */}
      <Route path="/Stock">
        <div className="cardview3">
          <Container>
            <Topbar />
            <Row>
              <Col xs={0} md={2}>
                <Sidebar />
              </Col>
              <Col>
                <Stock />
              </Col>
            </Row>
          </Container>
        </div>
      </Route>

      <Route path="/AddStock">
        <div className="cardview3">
          <Container>
            <Topbar />
            <Row>
              <Col xs={0} md={2}>
                <Sidebar />
              </Col>
              <Col>
                <CreateStock />
              </Col>
            </Row>
          </Container>
        </div>
      </Route>

      <Route path="/EditStock/:id">
        <div className="cardview3">
          <Container>
            <Topbar />
            <Row>
              <Col xs={0} md={2}>
                <Sidebar />
              </Col>
              <Col>
                <EditStocks />
              </Col>
            </Row>
          </Container>
        </div>
      </Route>

      <Route path="/StockDetails/:id">
        <div className="cardview3">
          <Container>
            <Topbar />
            <Row>
              <Col xs={0} md={2}>
                <Sidebar />
              </Col>
              <Col>
                <StockDetails />
              </Col>
            </Row>
          </Container>
        </div>
      </Route>

      <Route path="/AddItem">
        <div className="cardview3">
          <Container>
            <Topbar />
            <Row>
              <Col xs={0} md={2}>
                <Sidebar />
              </Col>
              <Col>
                <CreateItem />
              </Col>
            </Row>
          </Container>
        </div>
      </Route>

      <Route path="/EditItem/:id">
        <div className="cardview3">
          <Container>
            <Topbar />
            <Row>
              <Col xs={0} md={2}>
                <Sidebar />
              </Col>
              <Col>
                <EditItem />
              </Col>
            </Row>
          </Container>
        </div>
      </Route>

      <Route path="/viewItem">
        <div className="cardview3">
          <Container>
            <Topbar />
            <Row>
              <Col xs={0} md={2}>
                <Sidebar />
              </Col>
              <Col>
                <Item />
              </Col>
            </Row>
          </Container>
        </div>
      </Route>

      <Route path="/itemDetails/:id">
        <div className="cardview3">
          <Container>
            <Topbar />
            <Row>
              <Col xs={0} md={2}>
                <Sidebar />
              </Col>
              <Col>
                <ItemDetails />
              </Col>
            </Row>
          </Container>
        </div>
      </Route>

      {/*Deficits */}
      <Route path="/Deficit">
        <div className="cardview3">
          <Container>
            <Topbar />
            <Row>
              <Col xs={0} md={2}>
                <Sidebar />
              </Col>
              <Col>
                <Deficit />
              </Col>
            </Row>
          </Container>
        </div>
      </Route>

      <Route path="/AddDeficit">
        <div className="cardview3">
          <Container>
            <Topbar />
            <Row>
              <Col xs={0} md={2}>
                <Sidebar />
              </Col>
              <Col>
                <CreateDeficits />
              </Col>
            </Row>
          </Container>
        </div>
      </Route>

      <Route path="/EditDeficit/:id">
        <div className="cardview3">
          <Container>
            <Topbar />
            <Row>
              <Col xs={0} md={2}>
                <Sidebar />
              </Col>
              <Col>
                <EditDeficits />
              </Col>
            </Row>
          </Container>
        </div>
      </Route>

      <Route path="/DeficitDetails/:id">
        <div className="cardview3">
          <Container>
            <Topbar />
            <Row>
              <Col xs={0} md={2}>
                <Sidebar />
              </Col>
              <Col>
                <DeficitDetails />
              </Col>
            </Row>
          </Container>
        </div>
      </Route>

      {/*Stock report*/}

      <Route path="/stockReport">
        <div className="cardview3">
          <Container>
            <Topbar />
            <Row>
              <Col xs={0} md={2}>
                <Sidebar />
              </Col>
              <Col>
                <StockReport />
              </Col>
            </Row>
          </Container>
        </div>
      </Route>
      {/*Stock report*/}

      <Route path="/manualstockReport">
        <div className="cardview3">
          <Container>
            <Topbar />
            <Row>
              <Col xs={0} md={2}>
                <Sidebar />
              </Col>
              <Col>
                <ManualStockReport />
              </Col>
            </Row>
          </Container>
        </div>
      </Route>

      {/*Order*/}
      <Route path="/orders">
        <div className="cardview3">
          <Container>
            <Topbar />
            <Row>
              <Col xs={0} md={2}>
                <Sidebar />
              </Col>
              <Col>
                <OrderHome />
              </Col>
            </Row>
          </Container>
        </div>
      </Route>

      <Route path="/orderadd">
        <div className="cardview3">
          <Container>
            <Topbar />
            <Row>
              <Col xs={0} md={2}>
                <Sidebar />
              </Col>
              <Col>
                <CreatePost />
              </Col>
            </Row>
          </Container>
        </div>
      </Route>

      <Route path="/shopping">
        <div className="cardview3">
          <Container>
            <Topbar />
            <Row>
              <Col xs={0} md={2}>
                <Sidebar />
              </Col>
              <Col>
                <Shopping />
              </Col>
            </Row>
          </Container>
        </div>
      </Route>

      <Route path="/orderEdit/:id">
        <div className="cardview3">
          <Container>
            <Topbar />
            <Row>
              <Col xs={0} md={2}>
                <Sidebar />
              </Col>
              <Col>
                <EditPost />
              </Col>
            </Row>
          </Container>
        </div>
      </Route>

      <Route path="/post/:id" render={(props) => <PostDetails {...props} />}>
        <div className="cardview3">
          <Container>
            <Topbar />
            <Row>
              <Col xs={0} md={2}>
                <Sidebar />
              </Col>
              <Col>
                <PostDetails />
              </Col>
            </Row>
          </Container>
        </div>
      </Route>

      <Route path="/cartedit/:id">
        <div className="cardview3">
          <Container>
            <Topbar />
            <Row>
              <Col xs={0} md={2}>
                <Sidebar />
              </Col>
              <Col>
                <EditCart />
              </Col>
            </Row>
          </Container>
        </div>
      </Route>

      <Route path="/orderReport">
        <div className="cardview3">
          <Container>
            <Topbar />
            <Row>
              <Col xs={0} md={2}>
                <Sidebar />
              </Col>
              <Col>
                <OrderReport />
              </Col>
            </Row>
          </Container>
        </div>
      </Route>

      {/*Payment*/}
      <Route path="/payments">
        <div className="cardview3">
          <Container>
            <Topbar />
            <Row>
              <Col xs={0} md={2}>
                <Sidebar />
              </Col>
              <Col>
                <Payments />
              </Col>
            </Row>
          </Container>
        </div>
      </Route>

      <Route path="/CashPayment">
        <div className="cardview3">
          <Container>
            <Topbar />
            <Row>
              <Col xs={0} md={2}>
                <Sidebar />
              </Col>
              <Col>
                <CashPayment />
              </Col>
            </Row>
          </Container>
        </div>
      </Route>

      <Route path="/CashPaymentsView">
        <div className="cardview3">
          <Container>
            <Topbar />
            <Row>
              <Col xs={0} md={2}>
                <Sidebar />
              </Col>
              <Col>
                <CashPaymentsView />
              </Col>
            </Row>
          </Container>
        </div>
      </Route>

      <Route path="/OnlinePaymentsView">
        <div className="cardview3">
          <Container>
            <Topbar />
            <Row>
              <Col xs={0} md={2}>
                <Sidebar />
              </Col>
              <Col>
                <OnlinePaymentsView />
              </Col>
            </Row>
          </Container>
        </div>
      </Route>

      <Route path="/UpdateCashPay/:id">
        <div className="cardview3">
          <Container>
            <Topbar />
            <Row>
              <Col xs={0} md={2}>
                <Sidebar />
              </Col>
              <Col>
                <UpdateCashPay />
              </Col>
            </Row>
          </Container>
        </div>
      </Route>

      <Route path="/UpdateOnlinePay/:id">
        <div className="cardview3">
          <Container>
            <Topbar />
            <Row>
              <Col xs={0} md={2}>
                <Sidebar />
              </Col>
              <Col>
                <UpdateOnlinePay />
              </Col>
            </Row>
          </Container>
        </div>
      </Route>

      <Route path="/OnlinePaySpecificView/:id">
        <div className="cardview3">
          <Container>
            <Topbar />
            <Row>
              <Col xs={0} md={2}>
                <Sidebar />
              </Col>
              <Col>
                <OnlinePaySpecificView />
              </Col>
            </Row>
          </Container>
        </div>
      </Route>

      <Route
        path="/CashPaySpecificView/:id"
        component={() => (
          <div className="cardview3">
            <Container>
              <Topbar />
              <Row>
                <Col xs={0} md={2}>
                  <Sidebar />
                </Col>
                <Col>
                  <CashPaySpecificView />
                </Col>
              </Row>
            </Container>
          </div>
        )}
      ></Route>

      <Route path="/ViewHistoryCashPay">
        <div className="cardview3">
          <Container>
            <Topbar />
            <Row>
              <Col xs={0} md={2}>
                <Sidebar />
              </Col>
              <Col>
                <ViewHistoryCashPay />
              </Col>
            </Row>
          </Container>
        </div>
      </Route>

      <Route path="/ViewHistoryOnlinePay">
        <div className="cardview3">
          <Container>
            <Topbar />
            <Row>
              <Col xs={0} md={2}>
                <Sidebar />
              </Col>
              <Col>
                <ViewHistoryOnlinePay />
              </Col>
            </Row>
          </Container>
        </div>
      </Route>

      {/*Client Relation*/}
      <Route path="/CR">
        <div className="cardview3">
          <Container>
            <Topbar />
            <Row>
              <Col xs={0} md={2}>
                <Sidebar />
              </Col>
              <Col>
                <MainCR />
              </Col>
            </Row>
          </Container>
        </div>
      </Route>

      <Route
        path="/editDebt/:id"
        component={() => (
          <div className="cardview3">
            <Container>
              <Topbar />
              <Row>
                <Col xs={0} md={2}>
                  <Sidebar />
                </Col>
                <Col>
                  <EditDebt />
                </Col>
              </Row>
            </Container>
          </div>
        )}
      ></Route>

      <Route path="/addDebt">
        <div className="cardview3">
          <Container>
            <Topbar />
            <Row>
              <Col xs={0} md={2}>
                <Sidebar />
              </Col>
              <Col>
                <AddDebtor />
              </Col>
            </Row>
          </Container>
        </div>
      </Route>

      <Route path="/preorders">
        <div className="cardview3">
          <Container>
            <Topbar />
            <Row>
              <Col xs={0} md={2}>
                <Sidebar />
              </Col>
              <Col>
                <TestOrder />
              </Col>
            </Row>
          </Container>
        </div>
      </Route>

      <Route path="/addorder">
        <div className="cardview3">
          <Container>
            <Topbar />
            <Row>
              <Col xs={0} md={2}>
                <Sidebar />
              </Col>
              <Col>
                <CreatePreorder />
              </Col>
            </Row>
          </Container>
        </div>
      </Route>

      <Route path="/reportview">
        <div className="cardview3">
          <Container>
            <Topbar />
            <Row>
              <Col xs={0} md={2}>
                <Sidebar />
              </Col>
              <Col>
                <ReportPreOrderView />
              </Col>
            </Row>
          </Container>
        </div>
      </Route>

      <Route
        path="/postd/:id"
        component={() => (
          <div className="cardview3">
            <Container>
              <Topbar />
              <Row>
                <Col xs={0} md={2}>
                  <Sidebar />
                </Col>
                <Col>
                  <PostDebtor />
                </Col>
              </Row>
            </Container>
          </div>
        )}
      ></Route>

      {/*Supplier all supplier*/}
      <Route
        path="/supplier"
        component={() => (
          <div className="cardview3">
            <Container>
              <Topbar />
              <Row>
                <Col xs={0} md={2}>
                  <Sidebar />
                </Col>
                <Col>
                  <AllSupplier />
                </Col>
              </Row>
            </Container>
          </div>
        )}
      ></Route>

      {/*Supplier all upcomming*/}
      <Route
        path="/upcomingorder"
        component={() => (
          <div className="cardview3">
            <Container>
              <Topbar />
              <Row>
                <Col xs={0} md={2}>
                  <Sidebar />
                </Col>
                <Col>
                  <AllUpcomming />
                </Col>
              </Row>
            </Container>
          </div>
        )}
      ></Route>

      {/*Supplier ReportsPage supplier*/}
      <Route
        path="/reportsGenerator"
        component={() => (
          <div className="cardview3">
            <Container>
              <Topbar />
              <Row>
                <Col xs={0} md={2}>
                  <Sidebar />
                </Col>
                <Col>
                  <ReportsPage />
                </Col>
              </Row>
            </Container>
          </div>
        )}
      ></Route>

      {/*Supplier upcoming ReportsPage*/}
      <Route
        path="/reportupcome"
        component={() => (
          <div className="cardview3">
            <Container>
              <Topbar />
              <Row>
                <Col xs={0} md={2}>
                  <Sidebar />
                </Col>
                <Col>
                  <ReportsPage2 />
                </Col>
              </Row>
            </Container>
          </div>
        )}
      ></Route>

      {/*Expenses Routes */}
      <Route path="/expensesHome">
        <div className="cardview3">
          <Container>
            <Topbar />
            <Row>
              <Col xs={0} md={2}>
                <Sidebar />
              </Col>
              <Col>
                <AdminExpensesPage />
              </Col>
            </Row>
          </Container>
        </div>
      </Route>

      <Route path="/addExpense">
        <div className="cardview3">
          <Container>
            <Topbar />
            <Row>
              <Col xs={0} md={2}>
                <Sidebar />
              </Col>
              <Col>
                <AddExpense />
              </Col>
            </Row>
          </Container>
        </div>
      </Route>

      <Route path="/expenseReport">
        <div className="cardview3">
          <Container>
            <Topbar />
            <Row>
              <Col xs={0} md={2}>
                <Sidebar />
              </Col>
              <Col>
                <ExpenseReport />
              </Col>
            </Row>
          </Container>
        </div>
      </Route>

      <Route path="/editE/:id" render={(props) => <EditExpense {...props} />}>
        <div className="cardview3">
          <Container>
            <Topbar />
            <Row>
              <Col xs={0} md={2}>
                <Sidebar />
              </Col>
              <Col>
                <EditExpense />
              </Col>
            </Row>
          </Container>
        </div>
      </Route>

      <Route path="/expense/:id">
        <div className="cardview3">
          <Container>
            <Topbar />
            <Row>
              <Col xs={0} md={2}>
                <Sidebar />
              </Col>
              <Col>
                <ExpenseDetails />
              </Col>
            </Row>
          </Container>
        </div>
      </Route>
    </BrowserRouter>
  );
}

export default App;
