<script>
import feather from 'feather-icons';
import ProjectHeader from '../components/projects/ProjectHeader.vue';
import ProjectGallery from '../components/projects/ProjectGallery.vue';
import ProjectInfo from '../components/projects/ProjectInfo.vue';
// import ProjectRelatedProjects from '../components/projects/ProjectRelatedProjects.vue';
import projectDetails from '../data/projectDetails';

export default {
	name: 'Projects',
	components: {
		ProjectHeader,
		ProjectGallery,
		ProjectInfo,
		// ProjectRelatedProjects,
	},
	data: () => {
		return {
			projectDetails,
			singleProjectHeader: {},
			projectImages: {},
			projectInfo: {},
		};
	},
	mounted() {
		console.log(projectDetails)
		let pd = projectDetails.filter((item)=>{
			let id = item.id;
			return id==this.$route.params.id;
		})[0]
		this.singleProjectHeader= pd.singleProjectHeader;
		this.projectImages= pd.projectImages;
		this.projectInfo= pd.projectInfo;
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
		<!-- <ProjectRelatedProjects :relatedProject="relatedProject" /> -->
	</div>
</template>

<style scoped></style>
