<script setup lang="ts">
import { useQuery } from '@vue/apollo-composable'
import { gql } from 'graphql-tag';

const example = useQuery(gql`
  query ExampleQuery {
    me {
      ID
    }
  }
`);


</script>

<template>
  <h1>Lab</h1>
  <hr/>
  <h2>Result</h2>
  <pre>{{ example.result }}</pre>
</template>