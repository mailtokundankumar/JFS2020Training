import { LayoutCapacity } from "./layoutcapacity";

export class Room {

  id: number;
  name: string;
  location: string;
  capacities = new Array<LayoutCapacity>();
}

