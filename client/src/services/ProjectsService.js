import Api from '@/services/Api'

export default {
  fetchProjects () {
    return Api().get('projects')
  },

  addProject (params) {
    return Api().post('add_project', params)
  },

  updateProject (params) {
    return Api().put('projects/' + params.id, params)
  },

  getProject (params) {
    return Api().get('project/' + params.id)
  },

  deleteProject (id) {
    return Api().delete('projects/' + id)
  }
}
