import React, { useState } from "react";
import Styled from "styled-components";

const Form = ({ onSubmit }) => {
  const [username, setUsername] = useState("");
  const [level, setLevel] = useState("");
  const [showFaq, setShowFaq] = React.useState(true)

  const Clicked = (e) => {
    e.preventDefault();
    onSubmit({ username, level });
    setShowFaq(false)
  };

  return (
    <StyledForm>
      <Input
        type="text"
        spellCheck="false"
        placeholder="Steam Username"
        required
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        type="number"
        placeholder="Level Wanted"
        required
        value={level}
        onChange={(e) => setLevel(e.target.value)}
      />
      <Button type="submit" onClick={Clicked}>
        Calculate
      </Button>
      { showFaq ? <Faq /> : null }
    </StyledForm>
  );
};

const Faq = () => (
  <div id="Faq" style={{color : 'white',paddingTop: '25px'}}>
    Steam Astro is a web application that help you know how much would it cost to level up your steam account.
    <br/>
    <h3>how to use it ?</h3>
    step 1 : Get your steam Username or your ID64 and past it on the first input
    <br/>
    steamcommunity.com/id/<span style={{color : 'green'}}>_misty</span>/
    <br/>
    steamcommunity.com/profiles/<span style={{color : 'green'}}>76561199125082251</span>/
    <br/>
    step 2 : Enter the level you want to get at and press calculate.
    <br/>
    step 3 : You can see the cost of your level up in function of TeamForest2 Keys (cheapest way to rank up) .... 1 key = 2.5$  and you can trade 1 key for 20 set on traiding bots (you can find them by googling "steam cards tf2 keys")
  </div>
)

const StyledForm = Styled.form`
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
@media (min-width: 470px) {
  display: flex;
  margin: 30px;
  padding: 30px;
  width: 80vw;
  max-width: 600px;
  min-width: 400px;
  align-self: center;
  flex-flow: column;
}
@media (max-width: 470px) {
  display: flex;
  margin: 30px;
  padding: 30px;
  width: 70vw;
  align-self: center;
  flex-flow: column;
  margin: 0 auto;
  padding-top: 30px;
}

`;

const Input = Styled.input`
@media (min-width: 470px) {
  margin: 10px;
  padding: 10px;
  font-family: "Exo 2";
  text-align: center;
}
padding: 10px;
margin: 10px;
font-size: 18px
`;

const Button = Styled.button`
@media (min-width: 470px) {
  margin: 10px;
  padding: 10px;
  font-family: "Exo 2";
}
margin: 10px;
padding: 10px;
font-family: "Exo 2";
font-size: 18px
`;

export default Form;