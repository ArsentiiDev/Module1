import {
  IonItem,
  IonLabel,
  IonNote
} from '@ionic/react';
import { Message } from '../data/messages';
import './MessageListItem.css';

interface MessageListItemProps {
  message: Message;
}

const MessageListItem: React.FC<MessageListItemProps> = ({ message }) => {
  return (
    <IonItem routerLink={`/message/${message.shape}`} detail={false}>
      <div slot="start" className="dot dot-unread"></div>
    </IonItem>
  );
};

export default MessageListItem;
