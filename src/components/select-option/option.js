import React, {  } from 'react'
import { motor, cars } from '../../config/data/category';

export const Brand = (props) => {
    const {category, selected} = props;
    
    if(category==='1'){
        return(
            <>
            <option value=''>All</option>
            {motor.brand.map((data,idx)=> 
                <option value={data} selected={selected.toLowerCase() === data.toLowerCase()} key={idx}>{data}</option>
            )}
            </>
        )
    }
    else if(category.toUpperCase()==='0'){
        return(
            <>
            <option value=''>All</option>
            {cars.brand.map((data, idx)=> 
                <option value={data} selected={selected.toLowerCase() === data.toLowerCase()} key={idx}>{data}</option>
            )}
            </>
        )        
    }
    else{
        return(
            <option value=''>All</option>
        )
    }
}
export const Model = (props) => {
    const {category, selected} = props;
    if(category==='1'){
        return(
            <>
            <option value=''>All</option>
            {motor.model.map((data, idx)=> 
                <option value={data} selected={selected.toLowerCase() === data.toLowerCase()} key={idx}>{data}</option>
            )}
            </>
        )
    } 
    else if(category==='0'){
        return(
            <>
            <option value=''>All</option>
            {cars.model.map((data,idx)=> 
                <option value={data} selected={selected.toLowerCase() === data.toLowerCase()} key={idx}>{data}</option>
            )}
            </>
        )            
    }
    else{
        return(
            <option value=''>All</option>
        )
    }
}