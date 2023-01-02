<script>
// import Button from '../reusable/Button.vue';
export default { 
	// components: { Button },
	data() {
		return {
			name : '',
			email: '',
			message: '',
			subject:''
		}
	}, 
	methods: {
		sendEmail(){
			try{
				emailjs.sendForm(process.env.VUE_APP_EMAIL_JS_SERVICE_ID, process.env.VUE_APP_EMAIL_JS_TEMPLATE_ID, this.$refs.form,
				process.env.VUE_APP_EMAIL_JS_PUBLIC_KEY, )
			}catch(error){
				console.log(error);
			}
			this.name = ''
			this.email = ''
			this.message = ''
			this.subject = ''
		}
	},
};
import emailjs from "emailjs-com";
</script>

<template>
	<div class="w-full md:w-1/2">
		<div
			class="leading-loose max-w-xl m-4 p-7 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left container"
		>
			<p
				class="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8"
			>
				Contact Form
			</p>
			<form ref="form" @submit.prevent="sendEmail" class="font-general-regular space-y-7">
				<div>
					<label
						class="block text-lg text-primary-dark dark:text-primary-light mb-2"
						for="name"
						>Full Name</label
					>
					<input
						class="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
						id="name"
						name="name"
						v-model="name"
						type="text"
						required=""
						placeholder="Your Name"
						aria-label="Name"
					/>
				</div>
				<div>
					<label
						class="block text-lg text-primary-dark dark:text-primary-light mb-2"
						for="email"
						>Email</label
					>
					<input
						class="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
						id="email"
						name="email"
						v-model="email"
						type="text"
						required=""
						placeholder="Your Email"
						aria-label="Email"
					/>
				</div>
				<div>
					<label
						class="block text-lg text-primary-dark dark:text-primary-light mb-2"
						for="subject"
						>Subject</label
					>
					<input
						class="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
						id="subject"
						name="subject"
						v-model="subject"
						type="text"
						required=""
						placeholder="Subject"
						aria-label="Subject"
					/>
				</div>

				<div>
					<label
						class="block text-lg text-primary-dark dark:text-primary-light mb-2"
						for="message"
						>Message</label
					>
					<textarea
						class="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
						id="message"
						name="message"
						v-model="message"
						cols="14"
						rows="6"
						aria-label="Message"
					></textarea>
				</div>

				<div>
					<input
						title="Send Message"
						class="px-4 py-2.5 text-white tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg duration-500"
						type="submit"
						value="Send Message"
						aria-label="Send Message"
					/>
				</div>
			</form>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
