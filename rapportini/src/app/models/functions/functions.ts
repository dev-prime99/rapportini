export function mapDataFromModel(source:any,model:any):any{
    var result = {};
    if(model){
      Object.keys(model).forEach(key=>{
        result[key] = (source ? (source[key] || null) : null);
      });
    }
    return result;
  }

  export function updateData(base:any,aggiornato:any): void{
    if(base){
      Object.keys(base).forEach(key=>{
        base[key] = aggiornato[key];
      });
    }
  }