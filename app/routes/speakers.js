import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default Route.extend({
    model(){
        return ([
            {
              "id": 1,
              "firstName": "Дмитрий",
              "middleName": "Алексеевич",
              "lastName": "Бураков"
            },
            {
              "id": 2,
              "firstName": "Иван",
              "middleName": "Анатольевич",
              "lastName": "Собянин"
            },
            {
              "id": 3,
              "firstName": "Дмитрий",
              "middleName": "Николаевич",
              "lastName": "Махонин"
            }
          ])
        //return this.get("serviceData").getSpeakers();
    }
});
