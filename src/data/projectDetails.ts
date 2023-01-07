const projectDetails = [
    {   
        id: 1,
        singleProjectHeader: {
            singleProjectTitle: 'ktds API Gateway Solution',
            singleProjectDate: 'April, 2022 ~ September, 2022',
            singleProjectTag: 'Backend',
        },
        projectImages: [
            {
                id: 1,
                title: 'Kabul Project Management UI',
                img: require('@/assets/images/beast.jpeg'),
            },
            {
                id: 2,
                title: 'Kabul Project Management UI',
                img: require('@/assets/images/beast1.jpeg'),
            },
            {
                id: 3,
                title: 'Kabul Project Management UI',
                img: require('@/assets/images/beast2.jpeg'),
            },
        ],
        projectInfo: {
            clientHeading: 'About Client',
            companyInfos: [
                {
                    id: 1,
                    title: 'Name',
                    details: 'ktds',
                },
                {
                    id: 2,
                    title: 'Services',
                    details: 'Software Develop',
                },
                {
                    id: 3,
                    title: 'Website',
                    details: 'https://ktds.com',
                },
                {
                    id: 4,
                    title: 'Phone',
                    details: '02-523-7029',
                },
            ],
            objectivesHeading: 'Objective',
            objectivesDetails:
                'to process the large traffic and provide API integrated management service',
            technologies: [
                {
                    title: 'Tools & Technologies',
                    techs: [
                        'Spring Cloud Gateway',
                        'MongoDB',
                        'Postgresql',
                        'Spring Data JPA',
                        'Spring Data MongoDB',
                        'resilience4j',
                        'Bucket4j',
                        'Kubernetes',
                        'AWS EKS',
                        'ECR',
                        'ECS',
                        'EC2',
                        'Jmeter',
                        'Apache Bench',
                        // 'HTML',
                        // 'CSS',
                        // 'JavaScript',
                        // 'Vue.js',
                        // 'TailwindCSS',
                        // 'AdobeXD',
                    ],
                },
            ],
            projectDetailsList: [
                {
                    id:1,
                    projectDetailsHeading: 'Outline',
                    projectDetails: [
                        {
                            id: 1,
                            details:
                                'BEAST is an API gateway solution for digital transformantion. You can easily register, update, delete, and manage API with BEAST. You can add some custom filters to handle your API in the run time. These custome filters can be developed on web-based IDE.',
                        },
                        {
                            id: 2,
                            details:
                                'BEAST provides you a great dashboard that helps you monitor the API gateway and detect the anomaly. Of course you can achieve load balancing, log tracking, and fault tolerance with BEAST',
                        },
                    ],
                },
                {
                    id:2,
                    projectDetailsHeading: 'My Role',
                    projectDetails: [
                        {
                            id: 1,
                            details:
                                '1. Developing Spring Cloud Gateway Filters : developed non-blocking filters for api gateway such as prefilter, postfilter, auth filter, rate limiting filter, etc ',
                        },
                        {
                            id: 2,
                            details:
                                '2. DB & Memory Synchronization : fetches DB data periodically by Sceduler, and manage data in memory for performance',
                        },
                        {
                            id: 3,
                            details:
                                '3. Distributed Performance Test : build Jmeter master, slave servers in AWS EC2, and performed the distributed performance testing for several times. monitors api gateway performance by Visual VM ',
                        },
                        {
                            id: 4,
                            details:
                                '4. Dual DB : use either Spring Data JPA or Spring Data MongoDB to manage data with one service logic',
                        },
                        {
                            id: 5,
                            details:
                                '5. DevOps : deploy api gateway solution on AWS EKS environment and manage kubernetes objects like Pod, Service, StatefulSet, Ingress, etc ',
                        },
                    ],
                },
            ]
            // socialSharingsHeading: 'Share This',
            // socialSharings: [
            // 	// {
            // 	// 	id: 1,
            // 	// 	name: 'Twitter',
            // 	// 	icon: 'twitter',
            // 	// 	url: 'https://twitter.com/realstoman',
            // 	// },
            // 	// {
            // 	// 	id: 2,
            // 	// 	name: 'Instagram',
            // 	// 	icon: 'instagram',
            // 	// 	url: 'https://instagram.com/realstoman',
            // 	// },
            // 	// {
            // 	// 	id: 3,
            // 	// 	name: 'Facebook',
            // 	// 	icon: 'facebook',
            // 	// 	url: 'https://facebook.com/',
            // 	// },
            // 	// {
            // 	// 	id: 4,
            // 	// 	name: 'LinkedIn',
            // 	// 	icon: 'linkedin',
            // 	// 	url: 'https://linkedin.com/',
            // 	// },
            // 	// {
            // 	// 	id: 5,
            // 	// 	name: 'Youtube',
            // 	// 	icon: 'youtube',
            // 	// 	url: 'https://www.youtube.com/c/StomanStudio',
            // 	// },
            // ],
        },
        relatedProject: {
            relatedProjectsHeading: 'Related Projects',
            relatedProjects: [
                {
                    id: 1,
                    title: 'Mobile UI',
                    img: require('@/assets/images/mobile-project-1.jpg'),
                },
                {
                    id: 2,
                    title: 'Web Application',
                    img: require('@/assets/images/web-project-1.jpg'),
                },
                {
                    id: 3,
                    title: 'UI Design',
                    img: require('@/assets/images/ui-project-2.jpg'),
                },
                {
                    id: 4,
                    title: 'Kabul Mobile App UI',
                    img: require('@/assets/images/mobile-project-2.jpg'),
                },
            ],
        },
    },
    {   
        id: 2,
        singleProjectHeader: {
            singleProjectTitle: 'Ting, Social Dating Service',
            singleProjectDate: 'November, 2020 ~ January, 2021',
            singleProjectTag: 'Full Stack',
        },
        projectImages: [
            {
                id: 1,
                title: 'Kabul Project Management UI',
                img: require('@/assets/images/ting.png'),
            },
            {
                id: 2,
                title: 'Kabul Project Management UI',
                img: require('@/assets/images/ting1.png'),
            },
            {
                id: 3,
                title: 'Kabul Project Management UI',
                img: require('@/assets/images/ting2.png'),
            },
        ],
        projectInfo: {
            clientHeading: 'About Client',
            companyInfos: [
                {
                    id: 1,
                    title: 'Name',
                    details: 'KOSMO',
                },
                {
                    id: 2,
                    title: 'Services',
                    details: 'Developer Education',
                },
                {
                    id: 3,
                    title: 'Website',
                    details: 'https://ktds.com',
                },
                {
                    id: 4,
                    title: 'Phone',
                    details: '02-523-7029',
                },
            ],
            objectivesHeading: 'Objective',
            objectivesDetails:
                'to process the large traffic and provide API integrated management service',
            technologies: [
                {
                    title: 'Tools & Technologies',
                    techs: [
                        'Mysql',
                        'Spring Data JPA',
                        'Spring Data MongoDB',
                        'EC2',
                        'HTML',
                        'CSS',
                        'JavaScript',
                    ],
                },
            ],
            projectDetailsList: [
                {
                    id:1,
                    projectDetailsHeading: 'Outline',
                    projectDetails: [
                        {
                            id: 1,
                            details:
                                'BEAST is an API gateway solution for digital transformantion. You can easily register, update, delete, and manage API with BEAST. You can add some custom filters to handle your API in the run time. These custome filters can be developed on web-based IDE.',
                        },
                        {
                            id: 2,
                            details:
                                'BEAST provides you a great dashboard that helps you monitor the API gateway and detect the anomaly. Of course you can achieve load balancing, log tracking, and fault tolerance with BEAST',
                        },
                    ],
                },
                {
                    id:2,
                    projectDetailsHeading: 'My Role',
                    projectDetails: [
                        {
                            id: 1,
                            details:
                                '1. Developing Spring Cloud Gateway Filters : developed non-blocking filters for api gateway such as prefilter, postfilter, auth filter, rate limiting filter, etc ',
                        },
                        {
                            id: 2,
                            details:
                                '2. DB & Memory Synchronization : fetches DB data periodically by Sceduler, and manage data in memory for performance',
                        },
                        {
                            id: 3,
                            details:
                                '3. Distributed Performance Test : build Jmeter master, slave servers in AWS EC2, and performed the distributed performance testing for several times. monitors api gateway performance by Visual VM ',
                        },
                        {
                            id: 4,
                            details:
                                '4. Dual DB : use either Spring Data JPA or Spring Data MongoDB to manage data with one service logic',
                        },
                        {
                            id: 5,
                            details:
                                '5. DevOps : deploy api gateway solution on AWS EKS environment and manage kubernetes objects like Pod, Service, StatefulSet, Ingress, etc ',
                        },
                    ],
                },
            ]
        },
        relatedProject: {
            relatedProjectsHeading: 'Related Projects',
            relatedProjects: [
                {
                    id: 1,
                    title: 'Mobile UI',
                    img: require('@/assets/images/mobile-project-1.jpg'),
                },
                {
                    id: 2,
                    title: 'Web Application',
                    img: require('@/assets/images/web-project-1.jpg'),
                },
                {
                    id: 3,
                    title: 'UI Design',
                    img: require('@/assets/images/ui-project-2.jpg'),
                },
                {
                    id: 4,
                    title: 'Kabul Mobile App UI',
                    img: require('@/assets/images/mobile-project-2.jpg'),
                },
            ],
        },
    },
    
];

export default projectDetails;