let routes=[
{
  path: '/',
  name: '',
  component: require('./components/partial/Content.vue').default
},
{
  path: '/ucapan',
  name: '',
  component: require('./components/partial/ucapan.vue').default
},
{
  path: '/tableApi',
  name: '',
  component: require('./components/tableApi.vue').default
}
];
export default routes