import axios from 'axios'

const url = 'http://localhost:3001';

export const getData = (filter, category) => (dispatch) => {      
    const cate = category !== '' ? `category=${category}&` : '';   
    const model = filter.model!=='' ? `model=${filter.model}&` : '';    
    const condition = filter.condition!=='' ? `condition=${filter.condition}&` : '';    
    const brand = filter.brand!=='' ? `brand=${filter.brand}&` : '';    
    const location = filter.location!=='' ? `location=${filter.location}&` : '';    
    const transmision = filter.transmision!=='' ? `transmision=${filter.transmision}&` : '';    
    const fuel = filter.fuel!=='' ? `fuel=${filter.fuel}&` : '';    
    const exterior = filter.exterior!=='' ? `exterior=${filter.exterior}&` : '';    
    const interior = filter.interior!=='' ? `interior=${filter.interior}&` : '';    
    // const photo = filter.photo!=='' ? `photo=${filter.photo}&` : '';    
    // const video = filter.video!=='' ? `video=${filter.video}&` : '';       

    // const query = `${url}/vehicles/?${cate}${model}${condition}${brand}${location}${transmision}${fuel}${exterior}${interior}${price1}${price2}${mileage1}${mileage2}_sort=price&_order=${sort}`
    const query = `${url}/vehicles/?${cate}${model}${condition}${brand}${location}${transmision}${fuel}${exterior}${interior}`
    return new Promise((resolve, reject) => {               
        axios.get(query).then((res) => {
            // handle success                                       
            dispatch({type: 'SET_DATA', value: res.data})
            resolve({status: 200, message: 'Success'}) 
        })
        .catch((error) => {
            // handle error            
            reject({status: 400, message: error}) 
        })
    })
}
export const getDataBySlug = (slug) => (dispatch) => {
    const query = `${url}/vehicles/?slug=${slug}`
    return new Promise((resolve, reject) => {
        axios.get(query).then((res) => {
            resolve({status: 200, message: 'Success', data: res.data[0]})
        })
        .catch((error) => {
            // handle error            
            reject({status: 400, message: error})
        })
    })
}
export const getDataTop = (rating, condition) => (dispatch) => {
    const query = `${url}/vehicles/?rating=${rating}&condition=${condition}`
    return new Promise((resolve, reject) => {
        axios.get(query).then((res) => {            
            resolve({status: 200, message: 'Success', data: res.data.slice(0,6)})
        })
        .catch((error) => {
            // handle error            
            reject({status: 400, message: error})
        })
    })
}    
