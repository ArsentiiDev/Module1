import { CUBE,TRIANGLE, PYRAMID, RIGHT_TRIANGLE, TETRAHEDRON } from './constants';
export interface Message {
  shape: string;
  sides: string[];
}

const messages: Message[] = [
  {
    shape: CUBE,
    sides: ['a']
  },
  {
    shape: TRIANGLE,
    sides: ['a', 'b', 'c']
  },
  {
    shape: PYRAMID,
    sides: ['h', 'a', 'b', 'c']
  },
  {
    shape: RIGHT_TRIANGLE,
    sides: ['side a', 'side b', 'side c']
  },
  {
    shape: TETRAHEDRON,
    sides: ['h', 'a', 'b', 'c']
  },
];

export const getMessages = () => messages;

export const getMessage = (id: string) => messages.find(m => m.shape === id);
