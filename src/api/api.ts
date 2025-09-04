import axios from "axios";
import type { AxiosResponse } from "axios";

const apiClient = axios.create({
  headers:{
    'Content-Type': 'application/json',
  }
});

export async function setDataWebhook(data: Record<string, any>): Promise<AxiosResponse>{
  try{
    const response = await apiClient.post('https://formulario-inward-n8n.0hrrcz.easypanel.host/webhook-test/8ef7a580-adb2-4fe5-8d8a-4d8769aba27a', data);

    return response;
  } catch(error){
    console.error(error);
    throw error;
  }
}