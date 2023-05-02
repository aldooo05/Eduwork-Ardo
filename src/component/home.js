import React from "react";
import MyButton from "./myButton";
import ParticlesBg from "particles-bg";

const Home = () => {
  return (
    <div>
      <div className="card">
        <div className="card_body">
          <div className="profile">
            <img src="/logo192.png" className="avatar" alt="avatar" />
            <h1>@aldooo29</h1>
            <p>Seputar ngoding</p>
            <MyButton />
          </div>
          <div className="mt-16">
            <a href="/some-url">Instagram</a>
          </div>
        </div>
      </div>
      <ParticlesBg type="lines" bg={true} />
    </div>
  );
};

export default Home;