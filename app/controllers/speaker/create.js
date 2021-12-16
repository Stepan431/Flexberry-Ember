import Controller from '@ember/controller';
import EmberObject from '@ember/object';
export default Controller.extend({
    actions: {
        async saveSpeaker(e){
            e.preventDefault();

            await this.get("dataService").createSpeaker({
                firstName: this.get('firstName'),
                middleName: this.get('middleName'),
                lastName: this.get('lastName'),
            })
        }
    },
    model(){
        return EmberObject.create({
            firstName: '',
            middleName: '',
            lastName: '',
        });
    }
    
});
