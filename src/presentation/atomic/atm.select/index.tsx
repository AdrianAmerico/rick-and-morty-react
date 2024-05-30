import { ComponentProps } from 'react';

import ReactSelect from 'react-select';

interface SelectProps extends ComponentProps<typeof ReactSelect> {
  name: string;
}

export const Select = (props: SelectProps) => {
  return (
    <ReactSelect
      classNamePrefix="react-select"
      loadingMessage={() => 'Carregando...'}
      noOptionsMessage={() => 'Nenhuma opção disponível'}
      {...props}
    />
  );
};
