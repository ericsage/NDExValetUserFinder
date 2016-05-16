import React from 'react'
import Paper from 'material-ui/Paper'

import Search from './search/Search'
import Result from './result/Result'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

export default class NDExValet extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    const theme = getMuiTheme({})
    return (
      <MuiThemeProvider muiTheme={theme}>
        <div style={{ height: '100%', width: '100%'}}>
          <Search
            fields={this.props.fields}
            lucene={this.props.lucene}
            fieldActions={this.props.fieldActions}
            luceneActions={this.props.luceneActions}
          />
         <Result
            lucene={this.props.lucene}
            cartActions={this.props.cartActions}
          />
        </div>
      </MuiThemeProvider>
    )
  }

}
