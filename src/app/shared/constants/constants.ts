import { environment } from "../../../environments/environment";

export const apiUrl = {
    citiesUrl: `${environment.baseUrl}/api/cities`,
    clientsUrl: `${environment.baseUrl}/api/clients`,
    countriesUrl: `${environment.baseUrl}/api/countries`,
    salesRepresentativesUrl: `${environment.baseUrl}/api/salesrepresentatives`,
    statesUrl: `${environment.baseUrl}/api/states`,
};
