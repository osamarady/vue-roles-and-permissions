<template>
    <div>
        <div class="card border-danger mb-3">
            <div class="card-body text-danger">
                <h5 class="card-title">Delete Category</h5>
                <p class="card-text">Are You Sure You want to delete "{{ categoryName }}" Category</p>
            </div>
            <div class="card-footer bg-transparent border-danger text-center">
                <button class="btn btn-danger">Delete</button>
                <button class="btn btn-primary ml-3">Cancel</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['categoryName'],
    data() {
        return {
        }
    },
    emits: ['confirm'],
    methods: {
        AddNewCategory () {
            this.$emit('confirm', this.categoryName)
        }
    }
}
</script>

<style scoped>

</style>