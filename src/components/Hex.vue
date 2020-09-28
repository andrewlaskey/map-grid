<template>
  <div class="hex" :class="{ 'is-odd': isEven }" @click="updateHexItem">
    <img :src="imgSrc" :alt="item.type" />
  </div>
</template>

<script>
import { toRefs, computed } from 'vue'

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
    isEven: {
      type: Boolean,
      default: false,
    },
    row: {
      type: Number,
      default: 0,
    },
    col: {
      type: Number,
      default: 0,
    },
  },
  setup(props) {
    const { item } = toRefs(props)

    const imgSrc = computed(() => {
      const level = item.value.level || 0
      let src = `/images/ocean/tile_ocean_${level}.png`

      switch (item.value.type) {
        case 'grass':
          src = `/images/grassland/tile_grassland_${level}.png`
          break
        case 'forest':
          src = `/images/forest/tile_forest_${level}.png`
          break
        case 'mountain':
          src = `/images/mountain/tile_mountain_${level}.png`
          break
      }

      return src
    })

    return {
      imgSrc,
    }
  },
  methods: {
    updateHexItem() {
      this.$emit('click-hex', { key: this.item.key })
    },
  },
}
</script>

<style lang="scss" scoped>
.hex {
  position: relative;
  flex-shrink: 0;
  margin-right: 132px;
  width: 132px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hex img {
  width: 220px;
  position: absolute;
  left: -42px;
  bottom: -12px;
  pointer-events: none;
}

.hex span {
  position: relative;
  color: #fff;
  text-align: center;
  font-size: 1.5em;
}
</style>
