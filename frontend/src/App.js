import React, { Component } from  'react';
import {BrowserRouter,Route} from "react-router-dom"

import homeanodya from './components/homeanodya';
import Homepage from './components/Homepage';
import editanodya from './components/editanodya';
//import adminlogin from './Components/adminlogin';
import Rentalcost from './components/Rentalcost';
//import UserLogin from './components/UserLogin';
import rentalhome from './components/rentalhome';
import editrentalcost from './components/editrentalcost';
import rentalcostdetails from './components/rentalcostdetails';
//import adminsignup from './Components/adminsignup';
//import Usersignup from './Components/Usersignup';
import createpostsanodya from './components/createpostsanodya';

//Ramona
import Create from './components/Create';
import Edit from './components/Edit';
import HomeRamona from './components/HomeRamona';
import Details from './components/Details';
import assign from './components/assign';
import tripDrivers from './components/tripDrivers';
import response from './components/response';
import assignTrips from './components/assignTrips';

//Disni
import Ticket from './components/Ticket';
import CreateTicket from './components/CreateTicket';
import EditTicket from './components/EditTicket';
import NavBarTicket from './components/NavBarTicket';
import TicketDetails from './components/TicketDetails';
import TicketSlip from './components/TicketSlip';
import TicketPayment from './components/TicketPayment';
//import FooterTicket from './components/FooterTicket';





//Dineth
import CardDetails from './components/CardDetails';
import CreateCard from './components/CreateCard';
import EditCard from './components/EditCard';
import HomeDineth from './components/HomeDineth';
import ReCharge from './components/ReCharge';
import SeasonCard from './components/SeasonCard';


//Nisura
import CreatePostNisura from './components/CreatePostNisura';
import EditPostNisura from './components/EditPostNisura';
import HomeNisura from './components/HomeNisura';
//import NavBar from './components/NavBar';
import PostDetailsNisura from './components/PostDetailsNisura';
import TripPaymentNisura from './components/TripPaymentNisura';

//Azmie 
import CreateLocation from './components/CreateLocation';
import EditLocation from './components/EditLocation';
import Home from './components/Home';
import NavBar from './components/NavBar';
import LocationDetails from './components/LocationDetails';


export default class App extends Component{
  render(){
    return (
      <BrowserRouter>
       

          <Route path="" component={NavBar}></Route>
          <Route path = "/" exact component = {Homepage}></Route>
          <Route path = "/homeanodya"  component = {homeanodya}></Route>
          <Route path = "/createpostsanodya" component = {createpostsanodya}></Route>
          <Route path = "/editanodya/:id" component = {editanodya}></Route>
          <Route path = "/cost" component = {Rentalcost}></Route>
          <Route path = "/rentalhome" component = {rentalhome}></Route>
          <Route path = "/editrentalcost/:id" component = {editrentalcost}></Route>
          <Route path = "/rentalcostdetails/:id" component = {rentalcostdetails}></Route>


        <Route path="/HomeRamona" component={HomeRamona}></Route>
        <Route path="/addRamona" component={Create}></Route>
        <Route path="/editRamona/:id" component={Edit}></Route>
        <Route path="/postRamona/:id" component={Details}></Route>
        <Route path="/assign" component={assign}></Route>
        <Route path="/tripDrivers" component={tripDrivers}></Route>
        <Route path="/response/:id" component={response}></Route>
        <Route path="/assignTrips/:id" component={assignTrips}></Route>
        
       
         

        
        
        <Route path="/homeDisni" exact component={Ticket}></Route>
        <Route path="/addDisni" component={CreateTicket}></Route>
        <Route path="/editDisni/:id" component={EditTicket}></Route>
        <Route path="/postDisni/:id" component={TicketDetails}></Route>
        <Route path="/ticket/:id" component={TicketSlip}></Route>
        <Route path="/ticketpayment/:id" component={TicketPayment}></Route>



        <Route path="/secard" exact component={SeasonCard}></Route>         
        <Route path ="/list" component={HomeDineth}></Route> 
        <Route path ="/addCard" component={CreateCard}></Route>         
        <Route path ="/editCard/:id" component={EditCard}></Route>
        <Route path ="/card/:id" component={CardDetails}></Route>
        <Route path ="/charge" component={ReCharge}></Route>

        
       

        <Route path="/add"  component={HomeNisura}></Route>
        <Route path="/niss"  component={CreatePostNisura}></Route>
        <Route path="/edit/:id" component={EditPostNisura}></Route>
        <Route path="/Nisura/:id" component={PostDetailsNisura}></Route>
        <Route path="/tripcharge" component={TripPaymentNisura}></Route>
         
        <Route path="/managelocation" exact component={Home}></Route>
         <Route path="/addazmie" component={CreateLocation}></Route>
         <Route path="/editazmie/:id" component={EditLocation}></Route>
         <Route path="/locations/:id" component={LocationDetails}></Route>
        

              
      </BrowserRouter>
      

    )
  }
}