import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="not-found">
            <h2>Not found!</h2>
            <button onClick={() => navigate("/")}>
                Take me back!</button>
        </div>
    );
};

export default NotFound;
