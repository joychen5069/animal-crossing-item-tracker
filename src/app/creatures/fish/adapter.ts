export interface Adapter<T> {
    adapt(fish: any): T;
  }