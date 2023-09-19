import React, {useState} from 'react';
import {
  Alert,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import PrimaryButton from '../component/PrimaryButton';
import LinearGradient from 'react-native-linear-gradient';
import Title from '../component/Title';

function StartScreen(props: any) {
  const [enterValue, setEnterValue] = useState<string>('');
  const inputHandler = (enterValue: string) => {
    setEnterValue(enterValue);
  };
  const confirmHandle = () => {
    const choosenNum = parseInt(enterValue);

    if (isNaN(choosenNum) || choosenNum <= 0) {
      Alert.alert(
        'InValid Number!',
        'Number Has to be a number between 1 to 99.',
        [{text: 'Okay', style: 'destructive', onPress: resetinput}],
      );
    } else {
      props.navigation.navigate('GameScreen', {num: choosenNum});
    }
  };

  const resetinput = () => {
    setEnterValue('');
  };

  return (
    <LinearGradient colors={['#4e0329', '#ddb52f']} style={style.mainView}>
      <ImageBackground
        source={{
          uri: 'https://images.unsplash.com/photo-1570303345338-e1f0eddf4946?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGljZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
        }}
        style={style.mainView}
        imageStyle={style.imageStyle}>
        <View style={style.title}>
          <Title>Guess My Number</Title>
        </View>
        <View style={style.inputConatiner}>
          <Text style={style.instText}>Enter A Number</Text>
          <TextInput
            maxLength={2}
            style={style.textInput}
            keyboardType="number-pad"
            value={enterValue}
            onChangeText={inputHandler}
          />
          <View style={style.buttonView}>
            <View style={style.buttonConatiner}>
              <PrimaryButton onPress={resetinput}>Reset</PrimaryButton>
            </View>
            <View style={style.buttonConatiner}>
              <PrimaryButton onPress={confirmHandle}>Confirm</PrimaryButton>
            </View>
          </View>
        </View>
      </ImageBackground>
    </LinearGradient>
  );
}

export default StartScreen;

const style = StyleSheet.create({
  mainView: {
    flex: 1,
  },
  imageStyle: {
    opacity: 0.25,
  },
  title: {
    marginTop: 100,
    marginHorizontal: 20,
  },
  instText: {
    color: '#ddb52f',
    fontSize: 24,
  },

  inputConatiner: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    marginTop: 50,
    backgroundColor: '#3b021f',
    marginHorizontal: 20,
    borderRadius: 8,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: {width: 8, height: -8},
    shadowRadius: 4,
  },
  textInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: '#ddb52f',
    borderBottomWidth: 2,
    color: '#ddb52f',
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonView: {
    flexDirection: 'row',
  },
  buttonConatiner: {
    flex: 1,
  },
});
