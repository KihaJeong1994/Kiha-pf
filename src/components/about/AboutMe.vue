<script>
export default {
	setup() {
		return {
			bios: [
				{
					id: 1,
					bio:
						'Hello, my name is Kiha Jeong',
				},
				{
					id: 2,
					bio:
						`When I first learned programming, I wanted to be a technician. But, as I read the book about Steve Jobs, I realized that user experience is as important as background technology. So I decided to use what I learned to 
						build portfolio, service, and application, etc.`,
				},
				{
					id: 3,
					bio:
						`My goal is to realize imagination into reality by my technology. Also, I'm interested in automation and reducing repetition`,
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
