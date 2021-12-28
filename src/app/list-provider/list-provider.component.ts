import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProviderService } from '../services/provider.service';

@Component({
  selector: 'app-list-provider',
  templateUrl: './list-provider.component.html',
  styleUrls: ['./list-provider.component.css']
})
export class ListProviderComponent implements OnInit {
  providers:any
  constructor(private service : ProviderService,private router :Router) { }

  ngOnInit(): void {
    this.service.listProviders().subscribe(
      response => {
      this.providers = response;
      }
      );
  }
  deleteProvider(myObj:any) {
    //console.log(this.provider);
    this.service.deleteProvider(myObj).subscribe(response => {
    console.log(response);
    this.refreshListProviders();
    })
    }
    refreshListProviders() {
    this.service.listProviders().subscribe(
    response => {
    this.providers = response;
    }
    );
    }
    
    updateProvider(myObj:any) {
    this.router.navigate(['updateProvider' + '/' + myObj['id']]);
    }

}
