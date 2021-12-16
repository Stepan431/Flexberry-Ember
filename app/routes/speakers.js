import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { Promise } from 'rsvp';
import {later} from '@ember/runloop';

export default Route.extend({
  dataService: service("data"),
  
  model(){ 
    return new Promise((resolve)=>{
      later(async()=>{
        let speakers = await this.get("dataService").getSpeakers();
        resolve(speakers);
      }, 1800);
    });
  }
});
