class CommunicationAPI {
  static API_BASE_URL = "/api/v2";

  static requestHeaders() {
    return {
      'Content-Type': 'application/json',
    };
  }

  static async getChats() {
    const headers = this.requestHeaders();
    const url = CommunicationAPI.API_BASE_URL + "/chats";
    return await this.makeRequest(url, "GET", headers);
  }

  static async createChat(name, participants_id) {
    const headers = this.requestHeaders();
    const url = CommunicationAPI.API_BASE_URL + "/chats";
    const body = JSON.stringify({ name, participants_id });
    return await this.makeRequest(url, "POST", headers, body);
  }
  

  static async editChat(chatId, name, participants_id) {
    const headers = this.requestHeaders();
    const url = CommunicationAPI.API_BASE_URL + `/chats/${chatId}`;
    const body = JSON.stringify({ name, participants_id });
    return await this.makeRequest(url, "PUT", headers, body);
  }

  static async deleteChat(chatId) {
    const headers = this.requestHeaders();
    const url = CommunicationAPI.API_BASE_URL + `/chats/${chatId}`;
    return await this.makeRequest(url, "DELETE", headers);
  }

  static async getMessages(chatId) {
    const headers = this.requestHeaders();
    const url = CommunicationAPI.API_BASE_URL + `/chats/${chatId}`;
    return await this.makeRequest(url, "GET", headers);
  }

  static async sendMessage(chatId, text) {
    const headers = this.requestHeaders();
    const url = CommunicationAPI.API_BASE_URL + `/chats/${chatId}`;
    const body = JSON.stringify({ text });
    return await this.makeRequest(url, "POST", headers, body);
  }

  static async editMessage(chatId, messageId, text) {
    const headers = this.requestHeaders();
    const url = CommunicationAPI.API_BASE_URL + `/chats/${chatId}/${messageId}`;
    const body = JSON.stringify({ text });  // <-- Solo envía la propiedad 'text'
    return await this.makeRequest(url, "PUT", headers, body);
  }

  static async deleteMessage(chatId, messageId) {
    const headers = this.requestHeaders();
    const url = CommunicationAPI.API_BASE_URL + `/chats/${chatId}/${messageId}`;
    return await this.makeRequest(url, "DELETE", headers);
  }

  static async makeRequest(url, method, headers, body) {
    const request = new Request(url, {
      method: method,
      headers: headers,
      body: body,
    });
  
    try {
      const response = await fetch(request);
  
      if (!response.ok) {
        console.error(`Response not valid ${response.status}`, response);
        console.log(body);
        throw Error(`Response not valid ${response.status}`);
      }
  
      const contentType = response.headers.get('content-type');
      
      if (contentType && contentType.includes('application/json')) {
        // La respuesta es JSON
        const data = await response.json();
        console.log(`${method} request to ${url} successful:`, data);
        return data;
      } else {
        // La respuesta es texto simple
        console.log(`${method} request to ${url} successful (Non-JSON):`, response.statusText);
        return null; // Puedes manejar este caso según tus necesidades
      }
    } catch (error) {
      console.error(`${method} request to ${url} failed:`, error);
      throw error;
    }
  }
  
  
  
}

export default CommunicationAPI;
