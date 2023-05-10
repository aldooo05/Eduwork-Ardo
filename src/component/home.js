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
            <dl class="row">
              <h1 class="col-sm-3">Hallo selamat datang di websiteku</h1>
              <dd class="font-monospace">
                "Halo, perkenalkan, nama saya Mardotilah.
                <p>Saya bekerja sebagai programmer dan sangat tertarik dengan teknologi dan pengembangan perangkat lunak.</p>Saya telah bekerja dalam industri ini selama beberapa tahun dan selalu senang
                <p>mempelajari hal-hal baru dalam bidang ini. Apakah ada yang dapat saya bantu?</p>
              </dd>
              <dt class="col-sm-1">Terimakasih telah mengunjungi websiteku</dt>
            </dl>
            <MyButton />
          </div>
    
        </div>
      </div>
      <ParticlesBg type="lines" bg={true} />
    </div>
  );
};

export default Home;