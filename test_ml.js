class Header extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <header class="mdl-layout__header">
        <div class="mdl-layout__header-row">
          <span class="mdl-layout-title">{this.props.title}</span>
        </div>
      </header>
    );
  }
}

class Button extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <button
        class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--primary"
        onClick={this.props.onClick}
      >
        {this.props.label}
      </button>
    );
  }
}

class Example extends React.Component {
  constructor() {
    super();
    this.state = {
      msg: "",
      cnt: 0
    };
  }
  onClick() {
    this.setState({ msg: "Hello", cnt: this.state.cnt + 1 });
  }
  render() {
    return (
      <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <Header title="Sample" />
        <main class="mdl-layout__content">
          <div class="mdl-tabs mdl-js-tabs">
            <div class="mdl-tabs__tab-bar">
              <a href="#tab1-panel" class="mdl-tabs__tab is-active">
                Tab 1
              </a>
              <a href="#tab2-panel" class="mdl-tabs__tab">
                Tab 2
              </a>
              <a href="#tab3-panel" class="mdl-tabs__tab">
                Tab 3
              </a>
            </div>

            <div class="mdl-tabs__panel is-active" id="tab1-panel">
              <div>
                <Button onClick={() => this.onClick()} label="Button" />
                {this.state.msg}
                {this.state.cnt}
              </div>
            </div>

            <div class="mdl-tabs__panel" id="tab2-panel">
              Tab 2 Content
            </div>

            <div class="mdl-tabs__panel" id="tab3-panel">
              Tab 3 Content
            </div>
          </div>
        </main>
      </div>
    );
  }
}

ReactDOM.render(<Example />, document.getElementById("app"));
