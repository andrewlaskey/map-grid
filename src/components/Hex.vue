<template>
  <div class="hex" @click="updateHexItem">
    <img
      v-if="item.type === 'mountain'"
      src="../assets/mountain.svg"
      alt="mountain"
    />
    <img
      v-else-if="item.type === 'grass'"
      src="../assets/grass.svg"
      alt="grass"
    />
    <img v-else src="../assets/water.svg" alt="water" />
  </div>
</template>

<script>
export default {
  emits: ['click-hex'],
  props: {
    item: {
      type: Object,
      default: () => {
        return {
          id: '',
          type: 'water',
        }
      },
    },
  },
  methods: {
    updateHexItem() {
      this.$emit('click-hex', { id: this.item.id })
    },
  },
}
</script>

<style lang="scss" scoped>
.hex {
  width: 200px;
  height: 200px;
}
</style>
