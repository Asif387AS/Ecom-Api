const Product=require('../models/product')
const getAllProducts=async(req,res)=>{
    const {company, name, featured, sort, select}= req.query;
    const queryObject={};
//  Searching
    if(company){
        queryObject.company=company;
    }
    if(name){
        queryObject.name={ $regex: name, $options:"i"}
    }
    if(featured){
        queryObject.featured=featured;
    }
//  Sorting 
 let apiData= Product.find(queryObject)
//  console.log(apiData)
    if(sort){ 
        // console.log(typeof(sort));
        // we write in browser using comman but in code it is writtern using space when sorting is doing on two items
        let setFix=sort.split(",").join(" ");
        apiData= apiData.sort(setFix);

    }

    if(select){ 
        // let setFix=select.replace(",", " ")
        let setFix=select.split(",").join(" ");
        apiData= apiData.select(setFix);

    }

// Pagination
let page=Number(req.query.page) || 1;
let limit=Number(req.query.limit) || 3;
let skip=(page - 1)* limit;

// page=2
// limit=3
// skip= (2-1) *3 =3 

apiData=apiData.skip(skip).limit(limit);

    const myData= await apiData;
    // const myData=await Product.find(queryObject);
    // const myData=await Product.find(req.query);
    res.status(200).json({myData, nbHits: myData.length});
}

module.exports=getAllProducts