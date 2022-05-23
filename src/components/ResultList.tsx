import * as React from 'react';
import { CUBE, RIGHT_TRIANGLE, TETRAHEDRON } from '../data/constants';
import Cube from '../classes/cube.class';
import Tetrahedron from '../classes/tetrahedron.class';
import RightTriangle from '../classes/rightTriangle.class';
import { IonCol, IonContent, IonGrid, IonRow } from '@ionic/react';
import { useEffect, useState } from 'react';
import Shape from '../interfaces/shape.interface';

export interface IAppProps {
    figure: string | undefined,
    isOpen: Boolean
}

export default function ResultList(props: IAppProps) {

    const { figure, isOpen } = props;

    const [shape, setShape] = useState<Shape>({})

    useEffect(() => {
        let res2
        switch (figure) {
            case CUBE: res2 = new Cube(Math.random()); break;
            case TETRAHEDRON: res2 = new Tetrahedron(Math.floor(Math.random() * 10), new RightTriangle(3, 4, 5)); break;
            case RIGHT_TRIANGLE: res2 = new RightTriangle(3, 4, 5); break;
        }
        let res = res2?.show()
        setShape(res!)
    }, [figure])

    return (
        <>
            <IonContent>
                <h3>Results:</h3>
                <IonGrid>
                    {

                        (figure && isOpen) && Object.keys(shape).map((key) => {
                            return (
                                <IonRow key={key}>
                                    <IonCol>{key}</IonCol>
                                    <IonCol className="ion-align-self-end">{shape[key]}</IonCol>
                                </IonRow>
                            )
                        })
                    }
                </IonGrid>
            </IonContent>

        </>
    )
};
