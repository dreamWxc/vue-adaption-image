<template>
	<div
		ref="el"
		class="layout-image-wrap relative"
		v-on="$listeners"
		:style="{
			'border-radius': getRadius
		}"
	>
		<div
			class="screen overflow relative layout-image-background"
			:style="{backgroundColor:!success?backgroundColor:'transparent',transitionDuration:transition+'s'}"
		>
			<img
				v-if="vSrc"
				:src="vSrc"
				:style="{...imgStyle,'border-radius':getRadius,transitionDuration:transition+'s'}"
				@load="onLoad"
				@error="onError"
				class="layout-image"
				:class="{'layout-hide-image':load}"
			/>

			<!-- 内容 -->
			<div class="absolute layout-image-slot">
				<slot></slot>
			</div>

			<!-- 加载失败的视图 -->
			<div class="absolute layout-load-error flex center" v-if="error">
				<slot name="error">
					<!--<van-icon name="warning-o" v-if="icon" :size="size" :color="color" ></van-icon>-->
				</slot>
			</div>

			<!-- 加载中 -->
			<div class="absolute layout-load-error flex center" v-if="load">
				<slot name="loading">
					<!--<van-icon name="photo-o" :size="size" v-if="icon" :color="color" ></van-icon>-->
				</slot>
			</div>

		</div>
	</div>
</template>

<script>
  import mixins from '../mixins';
  import props from '../props';
  export default {
    name: "adaption-image",
    mixins,
    props
  };
</script>

<style scoped src="../index.scss" lang="scss"></style>
