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
},
{
  path: '/jobhunMediaPatner',
  name: 'jobhunMediaPatner',
  component: require('./components/content/layanan/jobhunMediaPatner').default
},
{
  path: '/jobhunTalentPool',
  name: 'jobhunTalentPool',
  component: require('./components/content/layanan/jobhunTalentPool').default
}

];
export default routes

// Coba