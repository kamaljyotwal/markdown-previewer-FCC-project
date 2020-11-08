import "./scss/main.scss";
import React, { Component } from "react";
import marked from "marked";
export default class App extends Component {
  constructor(props) {
    super();
    this.state = {
      data: prefilledcode,
    };
    this.handlerfunction = this.handlerfunction.bind(this);
  }

  handlerfunction(e) {
    this.setState({ data: e.target.value });
  }

  render() {
    const markdata = marked(this.state.data);

    return (
      <div className="App">
        <h1 className="title">MarkDown Previewer </h1>
        <div className="maincontainer">
          <textarea
            name=""
            id="editor"
            cols="30"
            rows="10"
            onChange={this.handlerfunction}
            value={this.state.data}
          ></textarea>
          <div id="preview" dangerouslySetInnerHTML={{ __html: markdata }}></div>
        </div>
      </div>
    );
  }
}

const prefilledcode = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:
![Mozilla logo](https://townandcountryremovals.com/wp-content/uploads/2013/10/firefox-logo-200x200.png)`;
