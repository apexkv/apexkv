export const aboutGrid = [
	{
		id: 1,
		title: 'I prioritize client collaboration, fostering open communication ',
		description: '',
		className: 'lg:col-span-3 md:col-span-6 md:row-span-4 lg:h-[60vh] h-[40vh] sm:row-span-4',
		imgClassName: 'w-full h-full',
		titleClassName: 'justify-end text-white',
		img: '/b1.svg',
		spareImg: '',
	},
	{
		id: 2,
		title: "I'm very flexible with time zone communications",
		description: '',
		className: 'lg:col-span-2 md:col-span-3 md:row-span-2 sm:h-[30vh] lg:h-auto xl:h-auto 2xl:h-auto h-[25vh]',
		imgClassName: '',
		titleClassName: 'justify-start text-white',
		img: '',
		spareImg: '',
	},
	{
		id: 3,
		title: 'My tech stack',
		description: 'I constantly try to improve',
		className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
		imgClassName: '',
		titleClassName: 'justify-center text-white',
		img: '',
		spareImg: '',
	},
	{
		id: 4,
		title: 'Tech enthusiast with a passion for development.',
		description: '',
		className: 'lg:col-span-2 md:col-span-3 md:row-span-1 lg:h-[18vh]',
		imgClassName: '',
		titleClassName: 'justify-start text-white',
		img: '/grid.svg',
		spareImg: '/b4.svg',
	},

	{
		id: 5,
		title: 'Currently building a Facebook Clone Project in Microservice Architecture',
		description: 'The Inside Scoop',
		className: 'md:col-span-3 md:row-span-2 lg:h-[40vh]',
		imgClassName: 'absolute right-0 bottom-0 md:w-96 w-60',
		titleClassName: 'justify-center md:justify-start lg:justify-center text-white',
		img: '/b5.svg',
		spareImg: '/grid.svg',
	},
	{
		id: 6,
		title: 'Do you want to start a project together?',
		description: '',
		className: 'lg:col-span-2 md:col-span-3 md:row-span-1 lg:h-[20vh]',
		imgClassName: '',
		titleClassName: 'justify-center md:max-w-full max-w-60 text-center text-white',
		img: '',
		spareImg: '',
	},
];

const ICONS = {
	nextjs: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
	django: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg',
	djangorest: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/djangorest/djangorest-original.svg',
	mysql: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg',
	neo4j: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/neo4j/neo4j-original-wordmark.svg',
	mongodb: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg',
	redis: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg',
	socketio: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original.svg',
	nginx: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg',
	nodejs: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg',
	rabbitmq: '',
	docker: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
	python: '',
	vscode: '',
};

export const projects = [
	{
		id: 1,
		title: 'Facebook Clone in Microservice Architecture',
		label: 'Facebook Clone',
		des: 'A microservices-based social media platform with real-time chat, post recommendations, and scalable user interactions.',
		img: '/fb-clone.png',
		iconLists1: ['nextjs', 'django', 'mysql', 'neo4j', 'mongodb', 'socketio'],
		iconLists2: ['redis', 'nginx', 'rabbitmq', 'docker'],
		link: 'https://github.com/apexkv/facebook-clone',
	},
	{
		id: 2,
		title: 'ApexMQ: High-Level RabbitMQ Integration for Django Microservices',
		label: 'ApexMQ',
		des: 'A Django plugin simplifying RabbitMQ usage by managing multiple connections, channels, and queues with class-based consumers and decorators for dynamic message handling in microservices',
		img: '/apexmq.png',
		iconLists1: ['python', 'django', 'rabbitmq'],
		iconLists2: [],
		link: 'https://github.com/apexkv/apexmq',
	},
	{
		id: 3,
		title: 'Django Project Managing Script (with VSCode Extension)',
		label: 'Django Manager',
		des: 'A Django app providing a high-level abstraction for RabbitMQ, enabling seamless management of multiple connections, channels, and queues. Features class-based consumers, dynamic message handling, and easy-to-use decorators for managing complex message workflows in microservice architectures.',
		img: '/django-manager.png',
		iconLists1: ['python', 'vscode'],
		iconLists2: [],
		link: 'https://github.com/apexkv/django-manager',
	},
];

export const navItems = [
	{
		name: 'home',
		link: '#name',
	},
	{
		name: 'About',
		link: '#about',
	},
	{
		name: 'Projects',
		link: '#projects',
	},
	{
		name: 'Contact',
		link: '#contact',
	},
];

export const socialMedia = [
	{
		id: 1,
		img: '/git.svg',
		link: 'https://github.com/apexkv',
		label: 'Kavindu Harshitha Github',
	},
	{
		id: 2,
		img: '/link.svg',
		link: 'https://www.linkedin.com/in/kavindu-harshitha/',
		label: 'Kavindu Harshitha LinkedIn',
	},
];
