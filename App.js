const heading = React.createElement("h2", {id:"heading1"}, "Hello world from React 1");


/**
 * 
 * <div>
 * <div>
 * <h1>I am an h1 tag</h1>
 * <h2>I am an h2 tag</h2>
 * </div>
 * </div>
 * 
 * 
 * 
 */
const parent = React.createElement(
    "div", {id:"parent"},       
    [React.createElement("div", {id:"child"}, [
        React.createElement("h2", {}, "I am an h2 tag"),
        React.createElement("h1", {}, "I am an h1 tag") 
    ]), 
    React.createElement("div", {id:"child2"}, [
        React.createElement("h2", {}, "I am an h2 tag"),
        React.createElement("h1", {}, "I am an h1 tag") 
    ])]
);

// put h1 on the Dom using root.

/// all the code will run on root. everything is rendered on root.
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);