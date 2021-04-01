import React from "react"
import { ThemeProvider } from "@material-ui/core/styles"

import { Theme } from "./Theme"

import Presentation from "./pages/Presentation"
import Consumer from "./pages/Consumer"
import Hirer from "./pages/Hirer"

export default class App extends React.Component {
  state = {
    page: "",
  }

  handleChangePage = (page) => {
    this.setState({ page: page })
  }

  renderedPage = () => {
    switch (this.state.page) {
      case "Consumer":
        return <Consumer toHome={this.handleChangePage} />;
      case "Hirer":
        return <Hirer toHome={this.handleChangePage} />;
      default:
        return <Presentation changePage={this.handleChangePage} />;
    }
  }

  render() {
    const page = this.renderedPage();
    return <ThemeProvider theme={Theme}>{page}</ThemeProvider>
  }
}
