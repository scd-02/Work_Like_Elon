import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Header";

const PlayList = () => {
    
    const [url, setUrl] = useState("");
    const handleChange = (event) => {
        setUrl(event.target.value);
    };
    const handleClear = (e) => {
        e.preventDefault();
    
        setUrl("");
      };
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/TODO");
    }
    return (  
        <div className="PlayList">
            <div className="Content">
                <div className="box">
                    <Navbar />
                    <form className = "form">
                        <div className="mb-2">
                            <label className="form-label">URL *</label>
                            <input
                            type="text"
                            className="form-control"
                            placeholder="URL"
                            onChange={handleChange}
                            value={url}
                            required
                            />
                        </div>
                        <div className="btn d-flex justify-content-around">
                            <button
                            type="submit"
                            className="btn btn-outline-success"
                            // onClick={handleSubmit}
                            >
                            Play
                            </button>
                            <button
                            type="submit"
                            className="btn btn-outline-info"
                            onClick={handleClear}
                            >
                            Clear
                            </button>
                            <button 
                            type="submit"
                            className="btn btn-outline-success"
                            onClick={handleClick}
                            >
                            Home
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
 
export default PlayList;