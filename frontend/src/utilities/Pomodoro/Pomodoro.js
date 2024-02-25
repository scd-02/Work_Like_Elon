import { useState } from "react";
import Settings from "./Settings";
import SettingContext from "./SettingsContext";
import Timer from "./Timer";
import "./pomodoro.css";

const Pomodoro = () => {
  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(45);
  const [breakMinutes, setBreakMinutes] = useState(15);

  return (
    <main>
      <h2 style={{ margin: 10, fontWeight: "bold"}}>Pomodoro</h2>
      <SettingContext.Provider
        value={{
          showSettings,
          setShowSettings,
          workMinutes,
          breakMinutes,
          setWorkMinutes,
          setBreakMinutes,
        }}
      >
        {showSettings ? <Settings /> : <Timer />}
      </SettingContext.Provider>
    </main>
  );
};

export default Pomodoro;
