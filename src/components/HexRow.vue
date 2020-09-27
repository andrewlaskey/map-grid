<template>
  <div class="hex-row" :class="{ 'is-odd': isEven }">
    <hex
      v-for="(item, index) in row"
      :key="item.id"
      :item="item"
      :is-even="index % 2 === 0"
      @click-hex="updateHexItem"
    />
  </div>
</template>

<script>
import Hex from './Hex'

export default {
  emit: ['click-hex'],
  components: { Hex },

  props: {
    isEven: {
      type: Boolean,
      default: false,
    },
    row: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    updateHexItem({ id }) {
      this.$emit('click-hex', { id })
    },
  },
}
</script>

<style lang="scss" scoped>
.hex-row {
  display: flex;
  align-items: center;
  height: 40px;
  transform: translate3d(0, 0, 0);

  &.is-odd {
    transform: translate3d(132px, 0, 0);
  }
}
</style>
