import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Title from '../component/Title';
import PrimaryButton from '../component/PrimaryButton';

function EndScreen(props: any) {
  const total = props.route.params.totalCount;
  const {enteredNum} = props.route.params;

  return (
    <LinearGradient colors={['#4e0329', '#ddb52f']} style={style.mainView}>
      <ImageBackground
        source={{
          uri: 'https://images.unsplash.com/photo-1570303345338-e1f0eddf4946?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGljZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
        }}
        style={style.mainView}
        imageStyle={style.imageStyle}>
        <Title>Game Over</Title>
        <View style={style.imageContainer}>
          <Image
            source={{
              uri: 'https://plus.unsplash.com/premium_photo-1679243792923-fe4631b234d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3VjY2Vzc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
            }}
            style={style.sucImage}
          />
        </View>
        <Text style={style.summaryText}>
          <Text>
            Your Phone needed <Text style={style.numText}>{total}</Text> rounds
            to guess number<Text style={style.numText}> {enteredNum}</Text>
          </Text>
        </Text>
        <PrimaryButton onPress={() => props.navigation.navigate('StartScreen')}>
          Start New Game
        </PrimaryButton>
      </ImageBackground>
    </LinearGradient>
  );
}

export default EndScreen;

const style = StyleSheet.create({
  mainView: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    opacity: 0.25,
  },
  sucImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: '#3b021f',
    margin: 36,
    overflow: 'hidden',
  },
  summaryText: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 20,
  },

  numText: {
    color: '#4e0329',
  },
});
