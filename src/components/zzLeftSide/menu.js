const Menu = [
	{
	// 	key: '1',
	// 	iconType: 'dashboard',
	// 	link: '/frame/home',
	// 	label: '首页'
	// }, {
		key: '3',
		iconType: 'table',
		link: '',
		label: '就餐服务管理',
		children: [
			{
				key: '3_1',
				link: '/frame/dish/dishList',
				label: '菜单列表'
			}, {
				key: '3_2',
				link: '/frame/dish/addDish',
				label: '添加菜单'
			}, {
				key: '3_3',
				link: '/frame/dish/survey',
				label: '满意度调查管理'
			}, {
				key: '3_4',
				link: '/frame/dish/healthFood',
				label: '健康饮食信息管理'
			}, {
                key: '3_5',
                link: '/frame/dish/AddHealthFood',
                label: '新增健康饮食信息'
            }
		]
	}
];

export default Menu;