import { CharacterDetails, Home } from '@/presentation/pages';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />}>
      <Route path=":id" element={<CharacterDetails />} />
    </Route>
  )
);
