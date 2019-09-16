import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import apis from '../../assets/apis.json';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
   // create observable
  simpleObservable: Observable<string>;
  private api_id: string;
  // id_obs = this.api_id.asObservable();

  constructor() {

  }

  get_api_id(): Observable<string> {
    this.simpleObservable = new Observable((observer) => {
      observer.next(this.api_id);
      observer.complete();
    });

    return this.simpleObservable;
  }
  set_api_id(id: string) {
    this.api_id = id;
  }

  get_index_from_id(id: string) {
    for (let i in apis) {
      const api = apis[i];
      if (api.name == id) {
       return i;
      }
    }
    return 420000
  }
  build_swagger_data(id: string) {
    let full_obj = <Object> apis[this.get_index_from_id(id)]["swagger_data"]
    let paths = full_obj["paths"];
    let tags_arr = full_obj["tags"];

    for (let path of Object.keys(paths)) {
      let obj = paths[path];
      for (let req of Object.keys(obj)) {
        let req_to_add = obj[req]
        req_to_add["path"] = path;
        req_to_add["type"] = req;

        // console.log(obj[req]);
        for (let tag of (obj[req]["tags"])) {
          for (let global_tag of tags_arr) {
            if (tag === global_tag["name"]) {
              if (!global_tag.hasOwnProperty("requests")) {
                global_tag["requests"] = [req_to_add]
              } else {
                global_tag["requests"].push(req_to_add);
              }
            }
          }
        }
      }
    }
    console.log(tags_arr);
    return full_obj;
  }
}
