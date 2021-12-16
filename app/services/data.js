import Service from '@ember/service';

export default Service.extend({
    
    async getSpeakers(){
        let response = await fetch('http://localhost:3000/speakers').then((response)=>response.json());
        return response.json();
    },
    getSpeaker(id){
       // return fetch(`http://localhost:3000/speakers/${id}`).then((response) => response.json());
    return this.get('speakers').find((speaker)=> speaker.id === parseInt(id))
    },
    
    deleteSpeaker(id){
        this.get('speakers').removeObject(speaker);
        return fetch(`http://localhost:3000/speakers/${id}`, { method: 'DELETE'});
    },
    
    createSpeaker(speaker){
        return fetch(`http://localhost:3000/speakers`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(speaker)
        });
    },
    editSpeaker(speaker){
        return fetch(`http://localhost:3000/speakers/${speaker.id}`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(speaker)
        });
    },
    getBooks(){
        return fetch('http://localhost:3000/books').then((response)=>response.json())
    }
});
