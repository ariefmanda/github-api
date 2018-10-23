import React, {Component} from 'react';
import { View, Text, TextInput, WebView, Modal, FlatList, TouchableOpacity} from 'react-native';
import axios from 'axios'
import data from '../test.json'
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data_output: [],
      database: [],
      search: "",
      selectedItem: {},
      modal_visible: {
        webView: false
      }
    }
  }

  componentDidMount () {
    this.fetchGithub()
  }

  fetchGithub = async () => {
    try {
      let { data } = await axios.get("https://api.github.com/users")
      this.setState({
        data_output: data,
        database: data
      })
    } catch (error) {
      alert(JSON.stringify(error))
    }
  }

  onChangeText = (type, value) => {
    let state   = this.state
    state[type] = value
    if(type == 'search') {
      state.data_output = state.database.filter(e=>{
        return e.login.toLowerCase().split(value.toLowerCase()).length > 1
      })
    }
    this.setState(state)
  }
  
  openWebView = (item) => {
    let state   = this.state
    state.selectedItem = item
    state.modal_visible.webView = true
    this.setState(state)
  }

  setModalVisible = (type, value) => {
    let modal_visible   = this.state.modal_visible
    modal_visible[type] = value
    this.setState({modal_visible})
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.welcome}>Github Users</Text>  
          <TouchableOpacity>
            <Icon name="menu" style={styles.iconMenu(false)}/>
          </TouchableOpacity>
        </View>
        <View style={styles.subheader}>
          <TextInput
            ref={component=>{
              this.Search = component
            }}
            placeholder={"Search by Username"}
            style={styles.formInput}
            onChangeText={(value) => this.onChangeText("search",value)}
            value={this.state.value}
            underlineColorAndroid='transparent'
          />
        </View>
        <FlatList
          data={this.state.data_output}
          renderItem={({item}) => 
          <TouchableOpacity onPress={()=>this.openWebView(item)}>
            <View 
              key={item.id}
              style={styles.list}>
              <View style={styles.listLeft}>
                <Icon name="people" style={styles.iconMenu(true)}/>
                <Text style={styles.listText}>{item.login}</Text> 
              </View>
              <Icon name="explore" style={styles.iconMenu(true)}/>
            </View>
          </TouchableOpacity>
          }
        />
      </View>
    );
  }
}

export default Home