import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

function App() {
    return (
        <div className="container">
            <div>
                <img src="images/profile_pic.jpg" alt="profile-photo" />
            </div>
            <div>
                <ProfileDescription />
            </div>
        </div>
    );
}

function ProfileDescription() {
    return (
        <div className="profile-description-container">
            <div className="div-name">Hwi Dong Park</div>
            <div>
                저는 빠른 속도로 성장하는 풀스택 개발자입니다. 저는 이해력이
                굉장히 빠르며, 항상 본질을 배우고 싶어합니다. 의미 없는 기술
                스택을 쌓는 것을 싫어합니다.
            </div>
            <div className="skill-container">
                <MySkill skill="html + css" emoji="✌️" />
                <MySkill skill="JavaScript" emoji="👍" />
                <MySkill skill="Java" emoji="👍" />
                <MySkill skill="SQL" emoji="👍" />
                <MySkill skill="AWS" emoji="👍" />
            </div>
        </div>
    );
}

function MySkill(props) {
    return (
        <div className="mySkill">
            {props.skill} {props.emoji}
        </div>
    );
}

console.log(document.querySelector("#root"));
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
