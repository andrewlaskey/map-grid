<template>
  <div class="hex-grid">
    <!-- <button @click="setupFirebase">Update</button> -->
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
import { db } from '../plugin/db'

export default {
  components: { HexRow },

  props: {
    itemsPerRows: {
      type: Number,
      default: 5,
    },
  },

  data() {
    return {
      gridItems: [],
    }
  },

  setup(props) {
    const { itemsPerRows } = toRefs(props)
    let grid = ref([])

    const getGrid = async () =>
      await db.ref('defaultGrid').on('value', (snapshot) => {
        const items = snapshot.val()

        grid.value = Object.entries(items).map(([key, value]) => {
          return {
            key,
            ...value,
          }
        })
      })

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
      getGrid,
      rows,
    }
  },
  mounted() {
    this.getGrid()
  },
  methods: {
    updateHexItem({ key }) {
      const item = this.grid.find((item) => item.key === key)

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

      db.ref(`defaultGrid/${item.key}`).update({ type: item.type })
    },
    setupFirebase() {
      this.grid.forEach((item) => {
        db.ref('defaultGrid').push(item)
      })
    },
  },
}
</script>

<style scoped>
.hex-grid {
  transform: rotateX(5deg);
}
</style>
