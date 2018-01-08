let Appbar = mui.react.Appbar,
  Button = mui.react.Button,
  Container = mui.react.Container,
  Input = mui.react.Input,
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
  getCount() {
    return this.EditTab;
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
            <TabStatus GetCount={() => this.getCount()} />
          </Tab>
          <Tab value="edit" label="Edit">
            <TabEdit
              ref={TabEdit => {
                this.EditTab = TabEdit;
              }}
            />
          </Tab>
        </Tabs>
      </div>
    );
  }
}

// 基本ボタン
class BasicButton extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <Button variant="raised" color={this.props.color}>
          {this.props.label}
        </Button>
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
          <div className="mui--text-dark-secondary mui--text-display2">Status</div>
          <BasicButton label="enquiry" />
          <BasicButton label="submit" color="primary" />
          <div className="mui--text-dark-secondary mui--text-display3">{this.props.Count}</div>
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
  onClick() {
    this.setState({ cnt: this.state.cnt + 1 });
  }
  render() {
    return (
      <div>
        <Container>
          <table className="mui-table">
            <tbody>
              <tr>
                <td>
                  <Button color="primary" onClick={() => this.onClick()}>
                    button {this.state.cnt}
                  </Button>
                </td>
                <td>
                  <Input
                    label="number of step"
                    type="number"
                    placeholder="1.0"
                    defaultValue="2.5"
                    step="0.01"
                    min="0"
                    max="10"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </Container>
      </div>
    );
  }
}

ReactDOM.render(<Example />, document.getElementById("app"));
