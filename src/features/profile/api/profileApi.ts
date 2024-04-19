import {instance} from "../../../shared/api/commonApi";


export const profileApi = {
    getProfile() {
        return instance.get('/profile/30621')
    }
}