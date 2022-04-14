<template>
	<div class="model" v-show="isShow" @click.self="close" @keyup.esc="close" tabindex="-1"></div>
</template>

<script>
import { mapGetters } from 'vuex';
	export default {
		name: "Model",
    computed: {
      ...mapGetters({
        isShow : 'shouldShowModel',
      })
    },
		methods: {
			close(){
        this.$store.dispatch('showModel',false)
      }
		},
	};
</script>

<style lang="scss" scoped>
	.model {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 1;
		width: 100%;
		height: 100%;
		background-color: #000;
	}
</style>
