<template>
  <div class="info">
    <div class="info-text" :class="{ 'is-hidden': isHidden }">
      <p>Click the hexes to build the map</p>
      <p>The map is updated real-time with everyone in the world.</p>
      <p>
        Assets by
        <a
          href="https://assetstore.unity.com/packages/2d/environments/isle-of-lore-hex-tiles-151336"
          target="_blank"
          >Steven Colling</a
        >.
      </p>
    </div>
    <button @click="isHidden = !isHidden">
      <img src="../assets/question.png" alt="question" />
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isHidden: true,
    }
  },
}
</script>

<style lang="scss" scoped>
.info {
  position: fixed;
  bottom: 1em;
  right: 1em;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
}

button {
  background-color: transparent;
  border: none;
  outline: none;

  img {
    pointer-events: none;
  }
}

.info-text {
  padding: 1em;
  width: 200px;
  background-color: rgba($color: #cccc, $alpha: 0.7);
  opacity: 1;
  transition: opacity 0.25s ease;

  &.is-hidden {
    display: none;
    opacity: 0;
  }
}
</style>
