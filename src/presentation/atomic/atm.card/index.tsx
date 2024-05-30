import { Typography } from '../atm.typography';
import { CardContent } from './styles';

interface CardProps {
  imgSrc: string;
  title: string;
  subtitle: string;
}

export const Card = ({ imgSrc, title, subtitle }: CardProps) => {
  return (
    <CardContent>
      <img src={imgSrc} alt={title} />
      <Typography.Strong>{title}</Typography.Strong>
      <Typography.Span>{subtitle}</Typography.Span>
    </CardContent>
  );
};
