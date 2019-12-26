<template>
    <div>
        <div v-for="edge in $page.test.edges" :key="edge.node.id">
            <h2>{{ edge.node.title }}</h2>
        </div>
    </div>

</template>


<page-query>
    query
    {
        allFaker (perPage: 1)
        {
            edges
            {
                node
                {
                    id
                    title
                }
            }
        }
    }
</page-query>

<script>
    export default {
        // ..
    };
</script>

<style>
    .card {
        border: 2px solid #333;
        margin: 20px;
    }
</style>