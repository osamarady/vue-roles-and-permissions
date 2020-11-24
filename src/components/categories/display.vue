<template>
    <table class="table table-bordered table-hover table-striped">
        <thead>
            <tr>
            <th colspan="4">All Categories</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="category in categories" :key="category.name">
            <td>{{ category.name }}</td>
            <td>
                <button class="btn btn-primary btn-sm">show</button>
            </td>
            <td>
                <button class="btn btn-success btn-sm">edit</button>
            </td>
            <td>
                <button class="btn btn-danger btn-sm">delete</button>
            </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    props: ['categories']
}
</script>

<style>

</style>