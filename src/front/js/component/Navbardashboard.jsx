import React, { useContext } from "react";
import "../../styles/navDashboard.css";
import { Search } from "./Search.jsx";
import homeImageUrl from "../../img/HomeTechnology.jpg";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
export const Navbardashboard = () => {
    const { actions, store } = useContext(Context);
    const navigate = useNavigate();
    const handleLogOut = () => {
        actions.logOut();
        navigate("/")
    }
    return (

        <div className="navbarDashboard mt-3">
            <nav className="navbar navbar-expand-lg navbar-dark" >
                <div className="container-fluid m-0 p-0">
                    <div className="row d-flex flex-row m-0 p-0 ">
                        <div className="col-4 d-flex align-items-start m-0 p-0">
                            <img className="nav mx-2" src={homeImageUrl} />

                            <a className="navbar-brand text-dark" href="#">QuantumStock</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span className=""></span>
                            </button>
                        </div>
                        <div className="col-3 mt-2">
                            <div className="text-dark">Bienvenido estimad@</div>
                        </div>
                        <div className="col-5 m-0 p-0 d-flex justify-content-evenly ">

                            <Search />
                            <div className=" nav-icon fs-4 mx-2 p-0"><i className="fa-regular fa-user "></i><span className="m"></span></div>
                            <div className=" nav-icon fs-4 mx-2 p-0" onClick={handleLogOut}><i className="fa-solid fa-right-from-bracket  "></i><span className="m"></span></div>

                        </div>
                    </div>
                </div>
            </nav>
        </div>


    );

};