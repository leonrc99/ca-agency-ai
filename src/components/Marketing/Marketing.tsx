import React from "react";
import "./Marketing.css";

function Marketing() {
  return (
    <section className="marketing">
      <div className="content-mkt">
        <h2 className="marketing-title">
          Marketing <br />
          para seu Público
        </h2>
      </div>
      <div className="cards-container">
        <div className="card">
          <div className="icon">🌐</div>
          <h3 className="subtitle">Sites</h3>
          <p className="description">
            Desenvolvimento de sites modernos e responsivos para a sua empresa.
          </p>
        </div>
        <div className="card">
          <div className="icon">📈</div>
          <h3 className="subtitle">Gestão de Tráfego</h3>
          <p className="description">
            Gestão eficiente de tráfego para aumentar suas conversões e vendas.
          </p>
        </div>
        <div className="card">
          <div className="icon">📱</div>
          <h3 className="subtitle">Social Media</h3>
          <p className="description">
            Estratégias de social media para engajar e crescer sua audiência.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Marketing;
