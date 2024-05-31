import { HTMLAttributes } from 'react';
import { Typography } from '../atm.typography';
import { CardContent } from './styles';

type CardProps = HTMLAttributes<HTMLDivElement> & {
  imgSrc: string;
  title: string;
  subtitle: string;
};

export const Card = ({ imgSrc, title, subtitle, ...props }: CardProps) => {
  return (
    <CardContent {...props}>
      <img src={imgSrc} alt={title} />
      <Typography.Strong>{title}</Typography.Strong>
      <Typography.Span>{subtitle}</Typography.Span>
    </CardContent>
  );
};
