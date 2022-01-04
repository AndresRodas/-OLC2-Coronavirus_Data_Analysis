import {URL} from '../config/API'

export class DataService {
    
    async Report_1(file, x, y, z, pred, pais, ext){
        try {
            const formData = new FormData()
            formData.append('myFile', file)
            const res = await fetch(`${URL}/report1/${x}/${y}/${z}/${pred}/${pais}/${ext}`, {
                method: 'POST',
                body: formData
            })
            return await res.json()
        } catch (error) {
            return null
        }

    }

    async Report_2(file, x, y, z, pred, pais, ext){
        try {
            const formData = new FormData()
            formData.append('myFile', file)
            const res = await fetch(`${URL}/report2/${x}/${y}/${z}/${pred}/${pais}/${ext}`, {
                method: 'POST',
                // headers: {
                //     'Content-Type': 'multipart/form-data'
                // },
                body: formData
            })
            return await res.json()
        } catch (error) {
            return null
        }
    }

    async Report_3(file, x, y, ext){
        try {
            const formData = new FormData()
            formData.append('myFile', file)
            const res = await fetch(`${URL}/report3/${x}/${y}/${ext}`, {
                method: 'POST',
                body: formData
            })
            return await res.json()
        } catch (error) {
            return null
        }

    }

    async Report_4(file, x, y, z, pred, depto, ext){
        try {
            const formData = new FormData()
            formData.append('myFile', file)
            const res = await fetch(`${URL}/report4/${x}/${y}/${z}/${pred}/${depto}/${ext}`, {
                method: 'POST',
                body: formData
            })
            return await res.json()
        } catch (error) {
            return null
        }
    }

    async Report_8(file, x, y, z, pred, depto, ext){
        try {
            const formData = new FormData()
            formData.append('myFile', file)
            const res = await fetch(`${URL}/report8/${x}/${y}/${z}/${pred}/${depto}/${ext}`, {
                method: 'POST',
                body: formData
            })
            return await res.json()
        } catch (error) {
            return null
        }
    }


    async Report_9(file, x, y, z, pais, ext){
        try {
            const formData = new FormData()
            formData.append('myFile', file)
            const res = await fetch(`${URL}/report9/${x}/${y}/${z}/${pais}/${ext}`, {
                method: 'POST',
                body: formData
            })
            return await res.json()
        } catch (error) {
            return null
        }
    }


}