import { Select } from '@/presentation/atomic';
import { Input } from '@/presentation/atomic/atm.input';
import { Form } from './styles';

export const Filters = () => {
  return (
    <Form>
      <Input name="name" placeholder="Nome" />
      <Select name="species" placeholder="Espécies" />
      <Select name="gender" placeholder="Generos" />
      <Select name="status" placeholder="Status" />
    </Form>
  );
};
