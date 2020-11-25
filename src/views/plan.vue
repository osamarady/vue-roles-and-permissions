<template>
  <div class="container py-5">
    <h1>Plans</h1>
    <div class="row">
      <div class="col-md-8">
        <div class="bg-white shadow-sm p-2">
          <div v-if="g_err != null" class="alert alert-danger text-capitalize mb-2">
            {{ g_err }}
          </div>
          
          <button class="btn btn-info mb-3" @click="AddNew">Add New Plan</button>

          <AllCategories type="plan" :categories="categories" @show-category="showCategory" @edit-category="editCategory" @del-category="delCategory" />

        </div>
      </div>
      <div class="col-md-4">
        <div v-if="open" class="bg-white shadow-sm p-2">
          <AddCategories v-if="add" type="plan" @new-category="newCategory" />

          <ShowCategories v-if="show" type="plan" :category="category" />

          <EditCategories v-if="edit" type="plan" :category="category" @update-category="updateCategory" />

          <DelCategories v-if="del" type="plan" :category="category" @confirm="result" @cancel="reset" />
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
      g_err: null,
      category: '',
      categories: [
        {
          id: 1,
          name: 'Plan 1',
          description: 'Lorem ipsum dolor sit amet, aeque oportere vulputate mei cu. Idque dolorem intellegebat vel ea, veritus detracto apeirian at mea. Vim vidit graeco appareat eu, et sed ferri munere. No eos justo partem. Ne pri nonumes fuisset ullamcorper, vero fuisset singulis cum eu, facilis feugait scriptorem ea quo. In pro facer salutatus argumentum.',
          subscribtions: 350
        },
        {
          id: 2,
          name: 'Plan 2',
          description: 'Vivendo gubergren omittantur ei vel, id mea placerat forensibus philosophia, omnesque menandri praesent pro no. Tale postea efficiantur per in. Per te menandri antiopam elaboraret. Principes corrumpit eos ut.',
          subscribtions: 150
        },
        {
          id: 3,
          name: 'Plan 3',
          description: 'Exerci mucius has id, vis graece singulis persequeris ei. Id vix tale munere salutatus, nam sumo atqui dignissim ei, sed ei omnesque dissentiunt.',
          subscribtions: 176
        },
        {
          id: 4,
          name: 'Plan 4',
          description: 'Congue virtute singulis cum et. Ad dolorum ancillae oportere duo, eum an consul partem habemus. Magna libris no vim, vix falli senserit in.',
          subscribtions: 802
        }
      ]
    }
  },
  methods: {
    AddNew () {
      let user = JSON.parse(localStorage.getItem('user'))
      if (user.role == 1 || user.role == 0) {
        this.reset()
        this.add = true
        this.open = true
        this.g_err = null
      } else {
        this.g_err = "you don't have permission to do add Plan"
        this.reset()
      }
    },
    newCategory (user) {
      this.categories.push(user)
    },
    showCategory (category) {
      let user = JSON.parse(localStorage.getItem('user'))
      if (user.role == 2 || user.role == 0) {
        this.reset()
        this.open = true
        this.show = true
        this.category = category
        this.g_err = null
      } else {
        this.g_err = "you don't have permission to Show Plan"
        this.reset()
      }
    },
    editCategory (category) {
      let user = JSON.parse(localStorage.getItem('user'))
      if (user.role == 3 || user.role == 0) {
        this.reset()
        this.open = true
        this.edit = true
        this.category = category
        this.g_err = null
      } else {
        this.g_err = "you don't have permission to Edit Plan"
        this.reset()
      }
    },
    updateCategory (category) {
      this.categories = this.categories.map(item => category.find(editItem => editItem.id === item.id) || item)
      this.reset()
    },
    delCategory (category) {
      let user = JSON.parse(localStorage.getItem('user'))
      if (user.role == 4 || user.role == 0) {
        this.reset()
        this.open = true
        this.del = true
        this.category = category
        this.g_err = null
      } else {
        this.g_err = "you don't have permission to Delete Plan"
        this.reset()
      }
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