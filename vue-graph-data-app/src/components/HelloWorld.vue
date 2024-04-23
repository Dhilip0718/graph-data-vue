<template>
  <div>
    <div v-if="graphData">
      <!-- Graph visualization goes here -->
      <div v-for="node in graphData.data" :key="node.name" @click="selectNode(node)">
        {{ node.name }}
      </div>
      <!-- Sidebar to display node details -->
      <div v-if="selectedNode">
        <h2>{{ selectedNode.name }}</h2>
        <p>{{ selectedNode.description }}</p>
      </div>
    </div>
    <div v-else>
      Loading graph data...
    </div>
  </div>
</template>


<script>
import axios from 'axios';

export default {
  data() {
      return {
          graphData: null,
          selectedNode: null
      };
  },
  created() {
      this.fetchGraphData();
  },
  methods: {
      fetchGraphData() {
          axios.get('http://localhost:3000/graph-data')
              .then(response => {
                  this.graphData = response.data;
              })
              .catch(error => {
                  console.error('Error fetching graph data:', error);
              });
      },
      selectNode(node) {
          this.selectedNode = node;
      }
  }
};
</script>

<style scoped>
/* Styles go here */
</style>
