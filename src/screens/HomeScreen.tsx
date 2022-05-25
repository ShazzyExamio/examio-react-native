import React, { memo } from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import Paragraph from '../components/Paragraph';
import { Navigation } from '../types';

type Props = {
  navigation: Navigation;
};

const HomeScreen = ({ navigation }: Props) => (
  <Background>
    <Logo />
    <Header>Examio</Header>

    <Paragraph>
    Zum Betreten des Lernsystems geben Sie bitte Ihre Login-Daten ein
    </Paragraph>
    <Button mode="contained" onPress={() => navigation.navigate('LoginScreen')} accessibilityStates  accessibilityComponentType  accessibilityTraits>
      Anmelden
    </Button>
    <Button
      mode="outlined"
      onPress={() => navigation.navigate('RegisterScreen')}
      accessibilityStates
      accessibilityComponentType
      accessibilityTraits
    >
      Anmeldung
    </Button>
  </Background>
);

export default memo(HomeScreen);
