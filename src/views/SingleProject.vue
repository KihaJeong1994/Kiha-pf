<script>
import feather from 'feather-icons';
import ProjectHeader from '../components/projects/ProjectHeader.vue';
import ProjectGallery from '../components/projects/ProjectGallery.vue';
import ProjectInfo from '../components/projects/ProjectInfo.vue';
import ProjectRelatedProjects from '../components/projects/ProjectRelatedProjects.vue';

export default {
	name: 'Projects',
	components: {
		ProjectHeader,
		ProjectGallery,
		ProjectInfo,
		ProjectRelatedProjects,
	},
	data: () => {
		return {
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
						details: 'Backend',
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
				projectDetailsHeading: 'Challenge',
				projectDetails: [
					{
						id: 1,
						details:
							'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
					},
					{
						id: 2,
						details:
							'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
					},
					{
						id: 3,
						details:
							'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
					},
					{
						id: 4,
						details:
							'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
					},
				],
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
		};
	},
	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
	methods: {},
};
</script>

<template>
	<div class="container mx-auto mt-10 sm:mt-20">
		<!-- Project header -->
		<ProjectHeader :singleProjectHeader="singleProjectHeader" />

		<!-- Project gallery -->
		<ProjectGallery :projectImages="projectImages" />

		<!-- Project information -->
		<ProjectInfo :projectInfo="projectInfo" />

		<!-- Project related projects -->
		<ProjectRelatedProjects :relatedProject="relatedProject" />
	</div>
</template>

<style scoped></style>
