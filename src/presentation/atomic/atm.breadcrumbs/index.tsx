import ArrowLeft from '@/assets/arrow-left.svg';
import { Typography } from '../atm.typography';
import { BreadcrumbsContent } from './styles';
import { Link } from 'react-router-dom';

interface BreadcrumbsProps {
  srcImage?: string;
  altImage?: string;
  title?: string;
  subTitle?: string;
}

export const Breadcrumbs = ({
  altImage,
  srcImage,
  subTitle,
  title,
}: BreadcrumbsProps) => {
  return (
    <BreadcrumbsContent>
      <Link to="..">
        <img src={ArrowLeft} alt="ìcone de voltar" />
      </Link>

      <div className="image-container">
        <img src={srcImage} alt={altImage} />
      </div>

      <div className="text-container">
        <Typography.Strong>{title}</Typography.Strong>
        <Typography.Span>{subTitle}</Typography.Span>
      </div>
    </BreadcrumbsContent>
  );
};
