<template>
  <div class="container py-5">
    <h1>Categories</h1>
    <div class="row">
      <div class="col-md-8">
        <div class="bg-white shadow-sm p-2">
          
          <button class="btn btn-info mb-3" @click="AddNew">Add New Category</button>

          <AllCategories :categories="categories" @show-category="showCategory" @edit-category="editCategory" @del-category="delCategory" />

        </div>
      </div>
      <div class="col-md-4">
        <div v-if="open" class="bg-white shadow-sm p-2">
          <AddCategories v-if="add" @new-category="newCategory" />

          <ShowCategories v-if="show" :category="category" />

          <EditCategories v-if="edit" :category="category" @update-category="updateCategory" />

          <DelCategories v-if="del" :category="category" @confirm="result" @cancel="reset" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AllCategories from '@/components/categories/display'
import AddCategories from '@/components/categories/add'
import ShowCategories from '@/components/categories/show'
import EditCategories from '@/components/categories/edit'
import DelCategories from '@/components/categories/delete'
export default {
  components: {
    AllCategories,
    AddCategories,
    ShowCategories,
    EditCategories,
    DelCategories
  },
  data() {
    return {
      open: false,
      add: false,
      show: false,
      edit: false,
      del: false,
      category: '',
      categories: [
        {
          id: 1,
          name: 'Medical Insurance',
          description: 'Lorem ipsum dolor sit amet, aeque oportere vulputate mei cu. Idque dolorem intellegebat vel ea, veritus detracto apeirian at mea. Vim vidit graeco appareat eu, et sed ferri munere. No eos justo partem. Ne pri nonumes fuisset ullamcorper, vero fuisset singulis cum eu, facilis feugait scriptorem ea quo. In pro facer salutatus argumentum.',
          subscribtions: 350
        },
        {
          id: 2,
          name: 'Life & Disability',
          description: 'Vivendo gubergren omittantur ei vel, id mea placerat forensibus philosophia, omnesque menandri praesent pro no. Tale postea efficiantur per in. Per te menandri antiopam elaboraret. Principes corrumpit eos ut.',
          subscribtions: 150
        },
        {
          id: 3,
          name: 'Employee benefits',
          description: 'Exerci mucius has id, vis graece singulis persequeris ei. Id vix tale munere salutatus, nam sumo atqui dignissim ei, sed ei omnesque dissentiunt.',
          subscribtions: 176
        },
        {
          id: 4,
          name: 'General Insurance',
          description: 'Congue virtute singulis cum et. Ad dolorum ancillae oportere duo, eum an consul partem habemus. Magna libris no vim, vix falli senserit in.',
          subscribtions: 802
        }
      ]
    }
  },
  methods: {
    AddNew () {
      this.reset()
      this.add = true
      this.open = true
    },
    newCategory (user) {
      this.categories.push(user)
    },
    showCategory (category) {
      this.reset()
      this.open = true
      this.show = true
      this.category = category
    },
    editCategory (category) {
      this.reset()
      this.open = true
      this.edit = true
      this.category = category
    },
    updateCategory (category) {
      this.categories = this.categories.map(item => category.find(editItem => editItem.id === item.id) || item)
      this.reset()
    },
    delCategory (category) {
      this.reset()
      this.open = true
      this.del = true
      this.category = category
    },
    result (category) {
      this.categories = this.categories.filter(item => item.id != category.id)
      this.reset()
    },
    reset () {
      this.open = false
      this.show = false
      this.add = false
      this.edit = false
      this.del = false
    }
  }
}
</script>