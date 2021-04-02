import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import AppHeader from "./components/core/AppHeader";
import AppFooter from "./components/core/AppFooter";
import AppDrawer from "./components/core/AppDrawer";
import NavBar from "./components/core/NavBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import QuestionAndAnswer from "./pages/QuestionAndAnswer";
import KnowledgeBase from "./pages/KnowledgeBase";
import Reviews from "./pages/Reviews";
import Terms from "./pages/Terms";
import Dashboard from "./pages/user/Dashboard";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error404 from "./pages/errors/Error404";
import PaymentMethods from "./pages/PaymentMethods";
import DeliveryInformation from "./pages/DeliveryInformation";
import CustomerService from "./pages/CustomerService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import BackToTop from "./components/core/BackToTop";
import ScrollToTop from "./components/core/ScrollToTop";
import MobileNavBar from "./components/core/MobileNavBar";

function App() {
    return (
        <>
            <Router>
                <ScrollToTop />
                <BackToTop />
                <AppDrawer/>
                <MobileNavBar />
                <AppHeader/>
                <NavBar/>
                <Switch>
                    <Route path="/" exact>
                        <Home/>
                    </Route>
                    <Route path="/login" exact>
                        <Login/>
                    </Route>
                    <Route path="/register" exact>
                        <Register/>
                    </Route>
                    <Route path="/question-and-answer" exact>
                        <QuestionAndAnswer/>
                    </Route>
                    <Route path="/knowledge-base" exact>
                        <KnowledgeBase/>
                    </Route>
                    <Route path="/site-review" exact>
                        <Reviews/>
                    </Route>
                    <Route path="/terms-and-conditions" exact>
                        <Terms/>
                    </Route>
                    <Route path="/about-us" exact>
                        <About/>
                    </Route>
                    <Route path="/contact-us" exact>
                        <Contact/>
                    </Route>
                    <Route path="/payment-methods" exact>
                        <PaymentMethods />
                    </Route>
                    <Route path="/delivery-information" exact>
                        <DeliveryInformation />
                    </Route>
                    <Route path="/customer-service" exact>
                        <CustomerService />
                    </Route>
                    <Route path="/privacy-policy" exact>
                        <PrivacyPolicy />
                    </Route>

                    <Route path="/user/dashboard" exact>
                        <Dashboard/>
                    </Route>

                    <Route path="*">
                        <Error404/>
                    </Route>
                </Switch>
                <AppFooter/>
            </Router>
        </>
    );
}

export default App;
