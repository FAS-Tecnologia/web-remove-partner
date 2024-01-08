import { Routes, Route } from 'react-router-dom';

import { SignInPage } from '../pages/SignIn';
import { RemoveAccountPage } from '../pages/RemoveAccount';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<SignInPage />} />
      <Route path="/remover" element={<RemoveAccountPage />} />
    </Routes>
  );
};
