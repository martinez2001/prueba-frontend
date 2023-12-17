class CommunicationAPI{
    static API_BASE_URL = "/api/v2";

    static requestHeaders(){

    }

    static async getChats(){
        const headers = this.requestHeaders();
        const request = new Request(CommunicationAPI.API_BASE_URL+"/chats",{
            method:'GET',
            headers:headers
        })

        try {
            const response = await fetch(request);
      
            if (!response.ok) {
              throw Error("Response not valid " + response.status);
            }
      
            const data = await response.json();
            console.log("Chats obtenidos con éxito:", data); // Agrega un log aquí
      
            return data;
          } catch (error) {
            console.error("Error al obtener chats:", error);
            throw error;
          }
    }
}

export default CommunicationAPI;