<template>
  <div class="hex-grid">
    <hex-row
      v-for="(row, index) in rows"
      :key="index"
      :row="row"
      :is-even="index % 2 === 0"
      @click-hex="updateHexItem"
    />
  </div>
</template>

<script>
import HexRow from './HexRow'
import { ref, toRefs, computed } from 'vue'

export default {
  components: { HexRow },

  props: {
    itemsPerRows: {
      type: Number,
      default: 5,
    },
  },

  setup(props) {
    const { itemsPerRows } = toRefs(props)
    const grid = ref([])

    const totalItems = 100

    for (let i = 0; i < totalItems; i++) {
      grid.value.push({
        id: 'abcd-' + i,
        type: 'water',
      })
    }

    const rows = computed(() => {
      let row = 0
      return grid.value.reduce(
        (acc, item, index) => {
          if (index > 0 && index % itemsPerRows.value === 0) {
            row++
            acc.push([])
          }

          acc[row].push(item)

          return acc
        },
        [[]]
      )
    })

    return {
      grid,
      rows,
    }
  },
  methods: {
    updateHexItem({ id }) {
      const item = this.grid.find((item) => item.id === id)

      if (item) {
        switch (item.type) {
          case 'water':
            item.type = 'grass'
            break
          case 'grass':
            item.type = 'forest'
            break
          case 'forest':
            item.type = 'mountain'
            break
          default:
            item.type = 'water'
        }
      }
    },
  },
}
</script>
