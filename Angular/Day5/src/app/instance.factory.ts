import { DataService } from './data.service';

export const dataServiceFactory = () => {
  return new DataService(12);
}
