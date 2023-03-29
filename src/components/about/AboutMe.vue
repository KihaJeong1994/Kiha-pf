<script>
export default {
	setup() {
		return {
			bios: [
				{
					id: 1,
					bio:
						`Hello, I am Kiha Jeong, a constantly evolving developer.`,
				},
				{
					id: 2,
					bio:
						`I believe that being a developer is not just a job of writing code, but a job of solving given problems by appropriately utilizing software and hardware. Therefore, I aim to become a problem solver who deeply thinks and persistently digs into the encountered problems, rather than a developer who superficially experiences numerous technology stacks. If the problems I solve can be helpful to users and even the world, that would be great.
Currently, I am responsible for the backend part and developing solutions at my company.`
,
				},
				{
					id: 3,
					bio:
						`My work and achievements include:`,
				},
				{
					id: 4,
					bio:
						`- Developing an asynchronous, non-blocking API gateway solution`,
				},
				{
					id: 5,
					bio:
						`- Developing and testing APIs`
				},
				{
					id: 6,
					bio:
						`- Building and testing a performance testing environment in the AWS environment, resulting in a 30% performance improvement`
				},
				{
					id: 7,
					bio:
						`- Designing features such as WebSocket integration and multi-tenancy`,
				},
				{
					id: 8,
					bio:
						`I want to contribute to implementing services that solve customer inconveniences and benefit the world. `,
				},
				{
					id: 8,
					bio:
						`'Let's make a dent in the universe.'`,
				},
			],
		};
	},
};
</script>

<template>
	<div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
		<!-- About profile image -->
		<div class="w-full sm:w-1/4 mb-7 sm:mb-0">
			<img
				src="@/assets/images/logo.png"
				class="rounded-xl w-96"
				alt=""
			/>
		</div>

		<!-- About details -->
		<div class="w-full sm:w-3/4 text-left">
			<p
				v-for="bio in bios"
				:key="bio.id"
				class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"
			>
				{{ bio.bio }}
			</p>
		</div>
	</div>
</template>
