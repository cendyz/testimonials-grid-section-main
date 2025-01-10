export default {
	data() {
		return {
			goals: [],
			enteredValue: '',
		}
	},
	methods: {
		addGoal() {
			if (this.enteredValue.trim() !== '') {
				this.goals.push(this.enteredValue)
				this.enteredValue = ''
				console.log(this.enteredValue)
			}
		},
		clearGoals() {
			this.goals = []
		},
	},
}
