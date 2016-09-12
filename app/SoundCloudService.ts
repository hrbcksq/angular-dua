import SC from 'sc';

declare var SC;

export class SoundCloudService {
   client_id = 'fb928276e4be25bd006a313e6f246c97';

   constructor() {
      SC.initialize({
         client_id: this.client_id
      });
   }

   search(search) {
        return new Promise((resolve, reject) => {
         SC.get('/tracks', {
            q: search,
            license: 'cc-by-sa'
         })
            .then(result => {
               resolve(result)
            })
            .catch(error => {
               reject(error)
            });
        });
    }
}


