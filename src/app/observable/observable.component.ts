import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription, Observable } from 'rxjs'

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit, OnDestroy {

  constructor() { }

  private firstSubscription : Subscription

  ngOnInit(): void {
  // this.firstSubscription =  interval(1000).subscribe(res=>{
  //     console.log("interval", res)
  //   })
    const customObservable = Observable.create(observer=>{
      let count = 0 
      setInterval(()=>{
        observer.next(count)
        if (count > 2) {
          observer.error(new Error("The count exceeded than 3"))
        }
        if (count === 2) {
          observer.complete()
        }
        count++
      }, 1000)
    })
    this.firstSubscription =  customObservable.subscribe(
    data=>{
      console.log("data", data)
    },
    error=>{
      console.log(error)
    },
    ()=>{
      console.log("The operation is complete!")
    }
    )
  }
  ngOnDestroy(){
    this.firstSubscription.unsubscribe()
  }

}
