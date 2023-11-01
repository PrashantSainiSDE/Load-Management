import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { LoadsService } from '../shared/services/loads.service';
import { Observable, ReplaySubject, map, takeUntil } from 'rxjs';
import { Loads, LogCheckCall } from '../shared/types/loads.interface';
import * as moment from 'moment';
import { loadsList } from 'src/assets/loadslist';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-list-loads',
  templateUrl: './list-loads.component.html',
  styleUrls: ['./list-loads.component.scss'],
  providers: [DatePipe],
})
export class ListLoadsComponent implements OnInit, OnDestroy {

  private readonly destroyed = new ReplaySubject<void>();
  readonly DefaultValue: string = '--';
  TodaysDate!: string;
  

  toggleStates: boolean[] = []; // Array to hold toggle states for each item
  
  loadlist$!: Observable<Loads>;
  list!: Loads;

  allLoadStatus = [
    { name: 'Pending' },
    { name: 'Quote' },
    { name: 'Confirmed' },
    { name: 'Assigned' },
    { name: 'Need Carrier' },
    { name: 'Dispatched' },
    { name: 'At Shipper' },
    { name: 'In Transit' },
    { name: 'At Receiver' },
    { name: 'Delivered' },
    { name: 'Possible Claim' },
  ]
  selectedStatus: any = 'Confirmed'
  
  allFilterLoadStatus = [
    { name: 'All' },
    { name: 'Today' },
    { name: 'Tommorow' },
    { name: 'Pending' },
    { name: 'Ready for Dispatch' },
    { name: 'Active' },
    { name: 'Delivered' },
    { name: 'Received' },
    { name: 'Payable' },
    { name: 'Archived' },
  ]
  activeLoadFilter: string = 'All'; // Property to store the active item
  filteredData$!: Observable<Loads>;
  
  private loadsService = inject(LoadsService);
  private datePipe = inject(DatePipe);
  
  ngOnInit(): void {
    this.initializeLoads();
    this.TodaysDate = this.datePipe.transform(new Date(), "yyyy-MM-dd") || "1990-09-10";
  }

  initializeLoads() {
    this.loadlist$ = loadsList.pipe();
    
    loadsList.pipe(takeUntil(this.destroyed)).subscribe({
      next: (value) => {
        console.log('value: ', value);
        this.list = value
      }
    })
    
    
    // this.loadlist$ = this.loadsService.listLoads().pipe();
    
    // this.loadsService.listLoads().pipe(takeUntil(this.destroyed)).subscribe({
    //   next: (value) => {
    //     console.log('value: ', value);
    //     this.list = value
    //   },
    //   error: (err) => {
    //     console.log('err: ', err);
    //   },
    // });


    this.filteredData$ = this.loadlist$
  }
  
  getCarrierName(carrierId: any) {
    return this.list?.carriers?.filter((x) => x?.id == carrierId)[0]?.company_name || this.DefaultValue;
  }

  getCustomerName(customerId: any) {
    return this.list?.customers?.filter((x) => x?.id == customerId)[0]?.customer_name || this.DefaultValue;
  }

  
  // method to get date
  getDate(dates: Array<any>, isPickDate: boolean) {
    const length = dates?.length;
    if (length === 0) {
      return this.DefaultValue;
    } else {
      return dates[isPickDate ? 0 : length-1]?.from_date;
    }
  }

  // method to get city location
  getLocation(locations: Array<any>, isPickLocation: boolean){
    
    const length = locations?.length;
    const index = isPickLocation ? 0 : length-1;
    const multiple = length > 1 ? " (M)" : ""
    
    
    // this is the condition for showing the multiple icon "(M)" 
    // console.log('length: ', length);
    // console.log('locations: ', locations);
    // this is the condition for showing the multiple icon "(M)" 
    
    
    if ((length === 0) || (locations[index]?.location == null)) {      
      return this.DefaultValue + multiple;
    }else {
      return locations[index]?.location?.city + multiple;
    }
  }


  // method to get moment of last contact
  getMoment(logCheckCall: LogCheckCall[]) {
    const length = logCheckCall?.length;

    if (length === 0) {
      return this.DefaultValue;
    } else {
      let lastContact = logCheckCall[length - 1]?.updated_at;
      lastContact = moment(lastContact).fromNow();

      return lastContact;
    }
  }

/*
 * Arrow inner part
 */
  // method to get address
  getAddress(addresses: Array<any>, isPickAddress:boolean){
    const length = addresses?.length;
    const index = isPickAddress ? 0 : length-1;
    if ((length === 0) || (addresses[index]?.location == null)) {
      return this.DefaultValue;
    } else {
    return addresses[index]?.location?.address + ", "+ this.getState(addresses, isPickAddress) + " " + addresses[index]?.location?.zip_code;
    }
  }

  // method to get state
  getState(states: Array<any>, isPickAddress:boolean){
    const length = states?.length;
    const index = isPickAddress ? 0 : length-1;
    if ((length === 0) || (states[index]?.location == null)) {
      return this.DefaultValue;
    } else {
    return states[index]?.location?.state;
    }
  }

  onChangeStatusColor(loadStatusRef: HTMLSelectElement) {
    loadStatusRef.classList.replace(loadStatusRef.classList[0], loadStatusRef.value)
  }

  // Function to toggle the state for a specific index
  toggleCollapse(index: number): void {
    this.toggleStates[index] = !this.toggleStates[index];
  }

  // Function to set the active item
  setActiveItem(item: string) {
    this.activeLoadFilter = item;
    console.log('item: ', item);

    if(this.activeLoadFilter === "All") {
      this.filteredData$ = this.loadlist$
      return;
    }
    
    
    this.filteredData$ = this.loadlist$.pipe(
      map((loadlist) => {
        
        return { 
          ...loadlist, 
          records: loadlist.records.filter((record) => {
            
            if(this.activeLoadFilter === "Today") {
              return record.deliveries?.at(-1)?.from_date === this.TodaysDate 
                              || record.pickups?.at(0)?.from_date === this.TodaysDate
            }

            if(this.activeLoadFilter === "Ready for Dispatch") {
              return record.status === "In Transit"
            }

            if(this.activeLoadFilter === "Active") {
              return record.status === "Assigned"
            }

            return record.status === this.activeLoadFilter
          })
        };
      })
    );

    this.filteredData$.subscribe(console.log);
  }


  ngOnDestroy(): void {
    this.destroyed.next();
    this.destroyed.complete();    
  }

  
}
