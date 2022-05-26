import React from "react";

const Subscribe = () => {
  return (
    <section className="mailchimp-one" id='contato'>
      <div className="container">
        <div className="block-title text-center">
          <h2 className="block-title__title">
            Fale conosco <span>conosco</span> <br />
          </h2>
        </div>
        <form
          action="https://api.staticforms.xyz/submit"
          method="post"
          className="mailchimp-one__mc-form mc-form"
          data-url="#"
        >
          <label htmlFor="mc-email" className="sr-only">
            Telefone/Whatsapp
          </label>
          <input type="hidden" name="accessKey" value="ed90c111-8e6e-41ae-b9e6-ef6c74d10eb8">
          </input>
          <input type="hidden" name="redirectTo" value="https://mezap.com.br"/> 
          <input
            type="text"
            id="mc-email"
            name="phone"
            className="formInput"
            placeholder="Telefone/Whatsapp"
          />
          <button type="submit">
            <i className="dimon-icon-right-arrow"></i>
          </button>
        </form>
        <div className="mc-form__response"></div>
      </div>
    </section>
  );
};
export default Subscribe;
