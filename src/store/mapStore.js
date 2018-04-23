import { observable, action, computed } from 'mobx'

export class MapStore {
    @observable lng = ''
    @observable lat = ''
    @observable curr = ''

    @computed get lngLat () {
        return {
            lng: this.lng,
            lat: this.lat
        }
    }

    @action setLngLat (lng, lat) {
        this.lng = lng
        this.lat = lat
    }

    @action setCurr (curr) {
        this.curr = curr
    }
}

export default new MapStore()