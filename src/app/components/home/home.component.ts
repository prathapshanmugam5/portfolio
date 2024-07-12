import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ApiserviceService } from 'src/app/apiservice.service';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private analyticsService: AnalyticsService,
    private api:ApiserviceService
  ) {
  }

  ngOnInit(): void {
    this.analyticsService.sendAnalyticPageView("/inicio", "Se entro a inicio")

    this.getAllCountries();
  }


  getAllCountries(){
    const data={
      
        "dataCode":"SELECT_ALL_COUNTRY_LIST"
    
    }

    this.api.post(data).subscribe((res)=>{
      console.log(res);
    })
  }

}
