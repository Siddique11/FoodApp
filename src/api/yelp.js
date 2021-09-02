import axios from "axios";

let headersList = {
  Accept: "*/*",
  "User-Agent": "Thunder Client (https://www.thunderclient.io)",
  Authorization:
    "Bearer XucPnfoHNWt72eevXp_-gA-a4T_WoXErktNTpRuINteoP6TqU_-SDWPGI_W18Y3y7g2AztL48sYJpSnlAC5V-xGH0xrNHf5ef8XascvOrPSKCfsSxcJhFZ5VgYosYXYx",
};

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  withCredentials: false,
  headers: headersList,
});
