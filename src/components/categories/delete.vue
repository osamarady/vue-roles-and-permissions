<template>
    <div>
        <div class="card border-danger">
            <div class="card-body text-danger">
                <h5 class="card-title">Delete Category</h5>
                <p class="card-text">Are You Sure You want to delete "{{ category.name }}" Category</p>
            </div>
            <div class="card-footer bg-transparent border-danger text-center">
                <button class="btn btn-danger" @click="DelCategory">Delete</button>
                <button class="btn btn-primary ml-3" @click="cancelDel">Cancel</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['category'],
    data() {
        return {
        }
    },
    emits: ['confirm', 'cancel'],
    methods: {
        DelCategory () {
            this.$emit('confirm', this.category)
        },
        cancelDel () {
            this.$emit('cancel', true)
        }
    }
}
</script>

<style scoped>

</style>