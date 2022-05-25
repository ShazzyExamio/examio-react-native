import React, { memo } from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';
import { Navigation } from '../types';

type Props = {
  navigation: Navigation;
};

const Dashboard = ({ navigation }: Props) => (
  <Background>
    <Logo />
    <Header>Examio Startseite</Header>
    <Paragraph>
      Dein kurs
    </Paragraph>
    <Button mode="outlined" onPress={() => navigation.navigate('HomeScreen')} accessibilityStates  accessibilityComponentType  accessibilityTraits>
    Ausloggen
    </Button>
  </Background>
);

export default memo(Dashboard);
