
import { defineStore } from 'pinia'
import Axios from 'axios';
import type { responseType, countryType } from '@/Common/types';

export const useStore = defineStore('store', {
    state: () => {
        return { 
            count: 0,
            loggedIn: false,
            page: 'login',
			gamePage: 'Build',
			testBuild: false,
			pathFinal: '',
            userData: {
              token: '',
			  username: ''
            },
			globalVars: {
				ipAdd: '192.168.143.16',
				port: 5000	
			},
			country: {} as countryType
        }
    },
    // could also be defined as
    // state: () => ({ count: 0 })
    actions: {
		
		async apiCall(url: string, data: any): Promise<responseType>{
			let response = await Axios({
				method: 'post',
				url: url,
				data: data,
				headers: {
					'x-access-token': this.userData.token,
					'Access-Control-Allow-Origin': '*'
					// 'version': state.appData.version,
					// 'sosyal-version': state.appData.versionSosyal,
				}    
			}) 

			return response.data;
		},
		async getUserData(){
			console.log('get user data');
			let response = await this.apiCall(this.pathFinal + 'user/getUserData/', null)
			console.log('response: ', response); 
			if(response.status == 1){
				this.storeUserData(response.payload.user);
				this.storeCountryData(response.payload.country);
				this.loggedIn = true;
				this.page = 'Home';
			}	
		},

		async test(){
			console.log('get user data');
			let response = await this.apiCall(this.pathFinal + 'test', null)
			console.log('response: ', response); 
			// if(response.status == 1){
			// 	this.loggedIn = true;
			// }	
		},
		storeUserData(userData: any){
			this.userData.username = userData.username
		},
		storeCountryData(countryData: countryType){
			if(countryData != null){
				this.country = countryData;
			}
			
		},
		setLoggedIn(val: boolean){
			this.loggedIn = val;
		},
		setPage(page: string){
			this.page = page;
		}
    },
  })
  