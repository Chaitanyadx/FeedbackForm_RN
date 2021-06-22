import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Linking,
} from 'react-native';

export default class Regform extends React.Component {
  constructor() {
    super();
    this.state = {
      data: ['Excellent', 'Very Good', 'Good', 'Bad'],
      checked: 0,
    };
  }
  constructors() {
    supers();
    this.state = {
      email: '',
      name: '',
      message: '',
      exps: '',
    };
  }

  updateValue(text, field) {
    if (field == 'name') {
      this.setState({
        name: text,
      });
    } else if (field == 'email') {
      this.setState({
        email: text,
      });
    } else if (field == 'message') {
      this.setState({
        message: text,
      });
    }
  }

  submit() {
    let collection = {};
    (collection.name = this.state.name),
      (collection.email = this.state.email),
      (collection.message = this.state.message),
      console.warn(collection);
  }
  render() {
    return (
      <View style={styles.regform}>
        <Text style={styles.header}>Feedback Form</Text>

        <TextInput
          style={styles.textInput}
          placeholder="Your Name"
          underlineColorAndroid={'transparent'}
          onChangeText={text => this.updateValue(text, 'name')}
        />

        <TextInput
          style={styles.textInput}
          placeholder="Your Email"
          underlineColorAndroid={'transparent'}
          onChangeText={text => this.updateValue(text, 'email')}
        />

        <Text style={styles.expe}>Your Experience</Text>

        <View style={styles.regform}>
          {this.state.data.map((data, key) => {
            return (
              <View>
                {this.state.checked == key ? (
                  <TouchableOpacity style={styles.btns}>
                    <Image
                      style={styles.img}
                      source={{
                        uri: 'https://d30y9cdsu7xlg0.cloudfront.net/png/868143-200.png',
                      }}
                    />
                    <Text style={styles.checkbox}>{data}</Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    onPress={() => this.setState({checked: key})}
                    style={styles.btns}>
                    <Image
                      style={styles.img}
                      source={{
                        uri: 'https://d30y9cdsu7xlg0.cloudfront.net/png/868142-200.png',
                      }}
                    />
                    <Text style={styles.checkbox}>{data}</Text>
                  </TouchableOpacity>
                )}
              </View>
            );
          })}
        </View>

        <TextInput
          style={styles.textInputs}
          placeholder="Your Comment"
          underlineColorAndroid={'transparent'}
          onChangeText={text => this.updateValue(text, 'message')}
        />

        <TouchableOpacity onPress={() => this.submit()} style={styles.button}>
          <Text style={styles.btnText}>Submit</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            Linking.openURL('https://www.smartcarehis.com/');
          }}>
          <Text style={styles.btnText}>Visit Our Website</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  regform: {
    alignSelf: 'stretch',
  },
  header: {
    fontSize: 26,
    color: '#fff',
    paddingBottom: 10,
    marginBottom: 40,
    borderBottomColor: '#199187',
    borderBottomWidth: 1,
    fontWeight: 'bold',
  },
  expe: {
    fontSize: 22,
    color: '#fff',
    paddingBottom: 10,
    marginBottom: 10,
  },
  textInput: {
    alignSelf: 'stretch',
    height: 40,
    marginBottom: 30,
    color: '#fff',
    borderBottomColor: '#f8f8f8',
    borderBottomWidth: 1,
  },
  textInputs: {
    alignSelf: 'stretch',
    height: 40,
    marginBottom: 15,
    marginTop: 20,
    color: '#fff',
    borderBottomColor: '#f8f8f8',
    borderBottomWidth: 1,
  },
  button: {
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#59cbbd',
    marginTop: 20,
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  checkbox: {
    fontSize: 20,
    color: '#fff',
    paddingBottom: 7,
    marginLeft: 10,
  },
  img: {
    height: 28,
    width: 28,
  },
  btns: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
