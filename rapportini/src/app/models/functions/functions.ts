export function mapDataFromModel(source:any,model:any):any{
    var result = {};
    if(model){
      Object.keys(model).forEach(key=>{
        result[key] = (source ? (source[key] || null) : null);
      });
    }
    return result;
  }