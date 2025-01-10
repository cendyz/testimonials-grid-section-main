<script setup>
import { ref } from 'vue'
import styles from './Hello.module.scss'

defineProps({
	msg: String,
})

const count = ref(10)
</script>

<template>
	<!-- <h1>{{ msg }}</h1> -->

	<!-- <div class="card">
    <button type="button" @click="count++" :class="styles.bbtn">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div> -->

	<div :class="styles.box">
		<div :class="styles.inputBox">
			<input type="text" :class="styles.input" v-model="enteredValue" />
			<button :class="styles.btn" @click="addGoal">Click</button>
		</div>
		<div :class="styles.boxes">
			<div :class="styles.text">
				<p v-for="(goal, index) in goals" :key="index">{{ goal }}</p>
			</div>
		</div>
    <button @click="clearGoals">delete all</button>
	</div>
</template>

<script>
import HelloWorldScript from './HelloWorldScript'

export default {
	mixins: [HelloWorldScript],
}
</script>
