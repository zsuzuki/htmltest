let Appbar = mui.react.Appbar,
  Button = mui.react.Button,
  Container = mui.react.Container,
  Tabs = mui.react.Tabs,
  Tab = mui.react.Tab;

class Example extends React.Component {
  constructor() {
    super();
    this.state = {
      num: 1
    };
  }
  onActive(tab) {
    this.setState({
      num: this.state.num + 1
    });
  }
  updateState() {
    this.setState({
      num: this.state.num + 1
    });
  }
  render() {
    return (
      <div>
        <Appbar>
          <div className="mui--text-display2">Control</div>
        </Appbar>
        <Tabs onChange={this.onChange} defaultSelectedIndex={1}>
          <Tab value="control" label="Control">
            <TabControl />
          </Tab>
          <Tab value="status" label="Status">
            <TabStatus />
          </Tab>
          <Tab value="edit" label="Edit">
            <TabEdit />
          </Tab>
        </Tabs>
      </div>
    );
  }
}

// 操作タブ
class TabControl extends React.Component {
  onStart() {}
  onExit() {}
  onRetry() {}
  onStop() {}
  render() {
    return (
      <div>
        <Container>
          <Button color="primary" onClick={() => this.onStart()}>
            start
          </Button>
          <Button color="primary" onClick={() => this.onExit()}>
            exit
          </Button>
          <Button color="primary" onClick={() => this.onRetry()}>
            retry
          </Button>
          <Button color="primary" onClick={() => this.onStop()}>
            stop
          </Button>
        </Container>
      </div>
    );
  }
}

// 情報タブ
class TabStatus extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <div className="mui--text-display4">Status</div>
        </Container>
      </div>
    );
  }
}

// 編集タブ
class TabEdit extends React.Component {
  constructor(props) {
    super();
    this.state = {
      cnt: 0
    };
  }
  onClick() {}
  render() {
    return (
      <div>
        <Container>
          <Button color="primary" onClick={() => this.onClick()}>
            button {this.state.cnt}
          </Button>
        </Container>
      </div>
    );
  }
}

ReactDOM.render(<Example />, document.getElementById("app"));
