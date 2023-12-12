class CommunicationAPI{
    static API_BASE_URL = "/api/v1";

    static requestHeaders(){

    }

    static async getChats(){
        const headers = this.requestHeaders();
        const request = new Request(CommunicationAPI.API_BASE_URL+"/chats",{
            method:'GET',
            headers:headers
        })

        const response = await fetch(request);
        
        if(!response.ok){
            throw Error("Response not valid "+ response.status);
        }
        return response.json();
    }
}

export default CommunicationAPI;