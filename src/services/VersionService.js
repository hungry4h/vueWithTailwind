import Api from '@/services/Api'

export default {
    index (search) {
        return Api().get('versions', {
            params: {
                search: search
            }
        })
    },
    show (vesionId) {
        return Api().get(`version/${vesionId}`)
    },
    post (version) {
        return Api().post('version', version)
    },
    put (version) {
        return Api().put(`version/${version.id}`, version)
    },
    delete (versionId) {
        return Api().delete(`version/${versionId}`)
    }
}