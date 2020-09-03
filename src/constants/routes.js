
const publicRoutes = {
  HOME: '/',
  ABOUT: '/acerca_de',
  PRIVACY: '/privacidad',
  CONTACT: '/contacto',
};

const privateRoutes = {
};

const Routes = {
  ...publicRoutes,
  ...privateRoutes
};
export default Routes;
