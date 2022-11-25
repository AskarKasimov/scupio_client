import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import "./Authentification.scss";

import BottomNavigation from "../BottomNavigation/BottomNavigation";

function Authentification() {
    const [authed, setAuthed] = useState();

    const navigate = useNavigate();

    useEffect(() => {
        // navigate("");
    }, []);
    return (
        <div className="main">
            <h2 className="scupio">scup<strong>io</strong></h2>
            <div className="container">
                <Outlet />
            </div>
            {/* {authed
                ? <BottomNavigation />
                : null
            } */}
            <BottomNavigation />
        </div>
    );
}

export default Authentification;