
const publicRoutes = {
  HOME: '/',
  LOGIN: '/login',
  ABOUT: '/acerca_de',
  PRIVACY: '/privacidad',
  CONTACT: '/contacto',
  REGISTER: '/registro',
  PROFILE: '/perfil',
};

const privateRoutes = {
};

const Routes = {
  ...publicRoutes,
  ...privateRoutes
};
export default Routes;
