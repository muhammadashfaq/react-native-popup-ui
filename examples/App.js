import React, { Component } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { Popup } from 'popup-ui'

class App extends Component {
  state = {
    visible: false
  }

  handlePopup = (props) => {
    
  }

  render(){
    return(
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity>
          <Text>Success</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text>Warning</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text>Erro</Text>
        </TouchableOpacity>

        <Popup visible={this.state.visible} />
      </View>
    )
  }
}

export default App