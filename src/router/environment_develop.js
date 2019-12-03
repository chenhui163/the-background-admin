const developRouter = [
    {
        path: '/',
        name: 'Index',
        component: ()=>import('@/views/index/index')
    },
    {
        path: '/chart',
        name: 'Chart',
        component: ()=>import('@/views/chart/index')
    }
]

export default developRouter