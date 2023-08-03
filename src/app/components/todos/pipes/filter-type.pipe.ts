import {Pipe, PipeTransform} from "@angular/core";
import {FilterType} from "../../../types/filter-type.type";

@Pipe({
  name: 'filterType'
})
export class FilterTypePipe implements PipeTransform {
  transform(filter: FilterType): string {
    switch (filter) {
      case 'ALL':
        return 'All';
      case 'ACTIVE':
        return 'Active';
      default:
        return 'Completed';
    }
  }
}
