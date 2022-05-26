import React from "react";
import bgImage from "../assets/images/background/cta-one-bg.png";
import mocImage from "../assets/images/mocs/cta-moc-1-1.png";
const CallToAction = () => {
  return (
    <section className="cta-one" id="sobre">
      <img src={bgImage} className="cta-one__bg" alt="alter text" />
      <div className="container">
        <img src={mocImage} className="cta-one__moc" alt="alter text" />
        <div className="row justify-content-lg-end">
          <div className="col-lg-6">
            <div className="cta-one__content">
              <i className="cta-one__icon dimon-icon-data1"></i>
              <div className="block-title text-left">
                <h2 className="block-title__title">
                Poderosa <span>automação</span> para o seu negócio.
                </h2>
              </div>
              <div className="cta-one__text">
                <p>
                Você já pensou em ter funcionário que trabalha 24h por dia, 7 dias por semana e não te cobra hora extra? E mais, ele é rápido, eficiente, não comete erros e no fim do dia ainda te dá um relatório de tudo que aconteceu. <span className="destaque2">O Robô Mezap faz isso por você e por sua empresa</span>

                </p>
              </div>
              <ul className="list-unstyled">
                <li>
                  <i className="fa fa-check"></i>Atendimento 24 Horas.
                </li>
                <li>
                  <i className="fa fa-check"></i>Controle de estoque.
                </li>
                <li>
                  <i className="fa fa-check"></i>Configuração de taxas.
                </li>
              </ul>
              <a href="https://app.mezap.com.br/" target="_blank" className="thm-btn">
                <span>Teste Grátis</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CallToAction;
