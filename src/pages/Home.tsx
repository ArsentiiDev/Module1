import MessageListItem from '../components/MessageListItem';
import { useState } from 'react';
import { Message, getMessages, getMessage } from '../data/messages';
import { CUBE, TRIANGLE, PYRAMID, RIGHT_TRIANGLE, TETRAHEDRON } from '../data/constants';

import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonText,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonItem,
  IonLabel,
  IonSelectOption,
  IonSelect,
  IonInput,
  IonButton,
  IonSegment,
  IonSegmentButton
} from '@ionic/react';
import './Home.css';
import ResultList from '../components/ResultList';

type Inputs = {
  figure: string,
  side: string
};

const sides = ['h', 'a', 'b', 'c']

const Home: React.FC = () => {


  interface select {
    value: string
  }

  const [figure, setFigure] = useState<string>();
  const [isOpen, setIsOpen] = useState<Boolean>(false);


  const renderResult = () => {
    setIsOpen(true)
  }

  const handleChange = (e: any) => {
    let value = e.target.value;
    console.log(value)
    setFigure(value)
    setIsOpen(false)
  }



  return (
    <IonPage id="home-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Модуль</IonTitle>
        </IonToolbar>
        <IonToolbar>
          <IonTitle>Григор'єв Арсентій КН-32</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Завдання</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Для учеників середньої школи необхідно розробити застосування для
            вивчення геометрії та планіметрії. Для трьовимірних тіл необхідно
            розраховувати площину та об‘єм для двовимірних площину та периметр
            та для тих для яких це можливо радіус вписаної та описаної окружностей.
            Тривимірні тіла – трикутна піраміда, куб. Двовимірні - прямокутний трикутник.
            Створити поліморфний контейнер для їх виведення(як мінімум 3 елемента).
            Результати розрахунків необхідно виводити на екран.
          </IonCardContent>
        </IonCard>
        <IonItem>
          <IonLabel>Choose figure:</IonLabel>
          <IonSelect
            id="select"
            onIonChange={e => handleChange(e)}
            value={figure}>
            <IonSelectOption value={CUBE}>Cube</IonSelectOption>
            <IonSelectOption value={TETRAHEDRON}>Tetrahedron</IonSelectOption>
            <IonSelectOption value={RIGHT_TRIANGLE}>Right Triangle</IonSelectOption>
          </IonSelect>
        </IonItem>

        <IonButton onClick={renderResult} expand="block">calculate</IonButton>

        <ResultList isOpen={isOpen} figure={figure} />

      </IonContent>
    </IonPage >
  );
};

export default Home;
