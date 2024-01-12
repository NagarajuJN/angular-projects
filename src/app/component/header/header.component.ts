import { Component, OnInit } from '@angular/core';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public totalItem : number = 0;
  public searchTerm : string ='';

  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;
    })
  }
  search(event:any){
this.searchTerm = (event.target as HTMLInputElement).value;
console.log(this.searchTerm);
this.cartService.search.next(this.searchTerm)  
}
loggedIn = false; // Assuming user is not logged in initially

// Simulating logout functionality
logout() {
  // Perform logout logic (e.g., clear authentication token)
  this.loggedIn = false;
}

  
}