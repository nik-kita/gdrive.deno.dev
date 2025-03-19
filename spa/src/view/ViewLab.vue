<script setup lang="ts">
import { useQuery } from '@vue/apollo-composable'
import { graphql } from '../gql'

const example = useQuery(graphql(`
  query ExampleQuery {
    me {
      ID
    }
  }
`));


</script>

<template>
  <h1>Lab</h1>
  <hr/>
  <h2>Result</h2>
  <pre>{{ example.result.value?.me?.ID }}</pre>
</template>