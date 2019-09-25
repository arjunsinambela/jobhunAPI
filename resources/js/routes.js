let routes=[
{
  path: '/',
  name: '',
  component: require('./components/content/Content.vue').default
},
{
  path: '/jobhunCareerHub',
  name: 'jobhunCareerHub',
  component: require('./components/content/layanan/jobhunCareerHub.vue').default
},
{
  path: '/jobhunAcademy',
  name: 'jobhunAcademy',
  component: require('./components/content/layanan/jobhunAcademy.vue').default
},
{
  path: '/jobhunMediaPatner',
  name: 'jobhunMediaPatner',
  component: require('./components/content/layanan/jobhunMediaPatner.vue').default
},
{
  path: '/jobhunTalentPool',
  name: 'jobhunTalentPool',
  component: require('./components/content/layanan/jobhunTalentPool.vue').default
}

];
export default routes

// Coba