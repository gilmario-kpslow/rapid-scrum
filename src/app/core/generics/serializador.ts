export class Serializador<T> {

  constructor(private type: {new (): T}){
  }

  toJson(entity: T): any{
    const json = {};
    Object.keys(entity).forEach(k => {
      json[k] = entity[k]
    })
    return json
  }

  fromJson(json: any, ): T {
     const entity = new this.type();
     Object.keys(json).forEach(k => {
       entity[k] = json[k]
     })
     return entity
  }
}
