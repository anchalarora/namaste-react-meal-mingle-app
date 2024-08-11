
import React from "react";
import { createRoot } from "react-dom/client";


//React element
const title = <h1> I am title </h1>;

const number = 2023;
//React component
const TitleComponent = () => <h1>I am component 3</h1>

const heading = <h1 id="heading" className="head" tabIndex="1">  {TitleComponent()} Namaste React </h1>

const heading2 = <h1 id="heading" className="head" tabIndex="1"> <TitleComponent/> Namaste React </h1>

const heading3 = <h1 id="heading" className="head" tabIndex="1"> <h1>{number}</h1> <TitleComponent> </TitleComponent> Namaste React </h1>

const root = createRoot(document.getElementById("root"))

root.render(heading3);

