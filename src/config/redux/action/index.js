import axios from 'axios'
import slugify from 'react-slugify';

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

    // const combination = `${url}/vehicles/?${cate}${model}${condition}${brand}${location}${transmision}${fuel}${exterior}${interior}${price1}${price2}${mileage1}${mileage2}_sort=price&_order=${sort}`
    const combination = `${url}/vehicles/?${cate}${model}${condition}${brand}${location}${transmision}${fuel}${exterior}${interior}`
    return new Promise((resolve, reject) => {               
        axios.get(combination).then(function (res) {
            // handle success                  
            const dataAll = res.data.map(element => {
                return{
                    ...element,
                    slug: slugify(element.title)
                }
            });         
            dispatch({type: 'SET_DATA', value: dataAll})
            resolve({status: 200, message: 'Success'}) 
        })
        .catch(function (error) {
            // handle error            
            reject({status: 400, message: error}) 
        })
    })
}

