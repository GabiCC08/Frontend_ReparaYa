
const publicRoutes = {
  HOME: '/',
  ABOUT: '/acerca_de',
  PRIVACY: '/privacidad',
  CONTACT: '/contacto',
  REGISTER: '/registro-de-un-nuevo-usuario',
  PROFILE: '/Inicio-de-sesion',
};

const privateRoutes = {
};

const Routes = {
  ...publicRoutes,
  ...privateRoutes
};
export default Routes;
