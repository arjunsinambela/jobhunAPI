let routes=[
{
  path: '/',
  name: '',
  component: require('./components//content/Content.vue').default
},
{
  path: '/jobhunCareerHub',
  name: 'jobhunCareerHub',
  component: require('./components/content/layanan/jobhunCareerHub').default
},
{
  path: '/jobhunAcademy',
  name: 'jobhunAcademy',
  component: require('./components/content/layanan/jobhunAcademy').default
}
];
export default routes

// Coba