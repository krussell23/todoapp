import { v4 as uuidv4} from 'uuid'


const keyGenerator = function (data){
    const keyedData = data.map(item=>{
        item.id = uuidv4().substr(0,8);

        return item
    })

    return keyedData
}

const generateSingleKey = function() {
    let key = uuidv4().substr(0,8);
    return key
}

export default keyGenerator
export { generateSingleKey }