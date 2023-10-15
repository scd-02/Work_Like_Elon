import Navbar from "../Components/Header";
import { useTimer } from "./useTimer";
    
const Pomodoro = () => {
  const { seconds, start, stop } = useTimer();
  return(
    <div className="pomodoro">
        <div className="Content">
          <div className="box">
            <Navbar />
            <p className="d-flex justify-content-center" style={{color: "white"}}>{seconds}</p>
            <div className="buttons d-flex justify-content-center">
            <button
              type="submit"
              className="btn btn-outline-info"
              onClick={start}
            >
              Start
            </button>
            <button
              type="submit"
              className="btn btn-outline-info"
              onClick={stop}
            >
              Stop
            </button>
          </div>
          </div>
        </div>
    </div>
  );
};

export default Pomodoro;
