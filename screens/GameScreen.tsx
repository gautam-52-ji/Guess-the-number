import React, {useState, useEffect} from 'react';
import {
  Alert,
  FlatList,
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  useWindowDimensions,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import Title from '../component/Title';
import PrimaryButton from '../component/PrimaryButton';

function generateRandomNumber(min: number, max: number, exclude: number) {
  const rand = Math.floor(Math.random() * (max - min)) + min;
  if (rand === exclude) {
    return generateRandomNumber(min, max, exclude);
  } else {
    return rand;
  }
}

let minBound = 1;
let maxBound = 100;
function GameScreen(props: any) {
  const {num} = props.route.params;

  const [count, setCount] = useState<number>(0);

  const initialGuess = generateRandomNumber(1, 100, num);
  const [currentGuess, setCurrentGuess] = useState<number>(initialGuess);

  const [guessRound, setGuessRounds] = useState<number[]>([]);

  const {height, width} = useWindowDimensions();

  useEffect(() => {
    if (currentGuess === num) {
      props.navigation.navigate('EndScreen', {
        enteredNum: num,
        totalCount: count,
      });
    }
  }, [currentGuess, num]);

  const nextGuessHandler = (direction: string) => {
    if (
      (direction === 'lower' && currentGuess < num) ||
      (direction === 'greater' && currentGuess > num)
    ) {
      Alert.alert("Don't Lie!", 'This is wrong....', [
        {text: 'Sorry!!!', style: 'cancel'},
      ]);
      return;
    }
    if (direction === 'lower') {
      maxBound = currentGuess;
      setCount(prev => prev + 1);
    } else {
      minBound = currentGuess + 1;
      setCount(prev => prev + 1);
    }

    const newRand = generateRandomNumber(minBound, maxBound, currentGuess);
    setCurrentGuess(newRand);
    setGuessRounds(prevRounds => [...prevRounds, currentGuess]);
  };

  const roundArrayLength = guessRound.length;

  let content = (
    <>
      <View style={style.textView}>
        <Text style={style.numText}>{currentGuess}</Text>
      </View>
      <View style={style.inputConatiner}>
        <Text style={style.instText}>Higher or Lower ?</Text>
        <View style={style.buttonView}>
          <View>
            <PrimaryButton onPress={() => nextGuessHandler('greater')}>
              <Image
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/128/7327/7327422.png',
                }}
                style={style.logo}
              />
            </PrimaryButton>
          </View>
          <View>
            <PrimaryButton onPress={() => nextGuessHandler('lower')}>
              <Image
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/128/7327/7327424.png',
                }}
                style={style.logo}
              />
            </PrimaryButton>
          </View>
        </View>
      </View>
    </>
  );

  if (width > 500) {
    content = (
      <>
        <Text style={[style.instText, {textAlign: 'center'}]}>
          Higher or Lower ?
        </Text>
        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
          <View style={style.buttonView}>
            <View>
              <PrimaryButton onPress={() => nextGuessHandler('greater')}>
                <Image
                  source={{
                    uri: 'https://cdn-icons-png.flaticon.com/128/7327/7327422.png',
                  }}
                  style={style.logo}
                />
              </PrimaryButton>
            </View>
          </View>
          <View style={style.textView}>
            <Text style={style.numText}>{currentGuess}</Text>
          </View>
          <View style={style.buttonView}>
            <View>
              <PrimaryButton onPress={() => nextGuessHandler('lower')}>
                <Image
                  source={{
                    uri: 'https://cdn-icons-png.flaticon.com/128/7327/7327424.png',
                  }}
                  style={style.logo}
                />
              </PrimaryButton>
            </View>
          </View>
        </View>
      </>
    );
  }
  return (
    <LinearGradient colors={['#4e0329', '#ddb52f']} style={style.mainView}>
      <ImageBackground
        source={{
          uri: 'https://images.unsplash.com/photo-1570303345338-e1f0eddf4946?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGljZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
        }}
        style={style.mainView}
        imageStyle={style.imageStyle}>
        <Title>Opponent's Guess</Title>
        {content}

        <View style={style.listContainer}>
          <FlatList
            data={guessRound.reverse()}
            renderItem={itemData => (
              <View style={style.listItem}>
                <Text>#{roundArrayLength - itemData.index}</Text>
                <Text>Opponent's Guess: {itemData.item}</Text>
              </View>
            )}
            keyExtractor={item => item + ''}
          />
        </View>
      </ImageBackground>
    </LinearGradient>
  );
}

export default GameScreen;

const style = StyleSheet.create({
  mainView: {
    flex: 1,
    padding: 20,
  },
  imageStyle: {
    opacity: 0.25,
  },
  textView: {
    borderWidth: 4,
    borderColor: '#ddb52f',
    padding: 24,
    margin: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#ddb52f',
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
  instText: {
    color: '#ddb52f',
    fontSize: 24,
  },
  buttonView: {
    flexDirection: 'row',
    marginTop: 20,
  },
  logo: {
    height: 30,
    width: 30,
  },
  listItem: {
    borderColor: '#3b021f',
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: '#ddb52f',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 4,
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
});
