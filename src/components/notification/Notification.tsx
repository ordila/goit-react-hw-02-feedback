import { FC } from 'react';
import css from './Notification.module.css';
import { INotificationProps } from './Notification.types';

export const Notification: FC<INotificationProps> = ({ message }) => {
  return <div className={css.notification}>{message}</div>;
};
