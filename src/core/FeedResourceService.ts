import axios from 'axios';

class FeedResourceService {
  constructor(private httpClient: any) {
  }

  getItems() {
    return this.httpClient.get(`/content/feed/resources.json`);
  }
}

export const FeedResourceServiceImpl = new FeedResourceService(axios.create({
  baseURL: "https://playbuzz-cdn.s3.amazonaws.com"
}));
