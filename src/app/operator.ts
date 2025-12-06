import { map, Observable, of } from "rxjs";

export function doubleValue() {
    return (source: Observable<number>) => {
        return source.pipe(
            map(value => value *2)
        );
    }
}

// use rxjs custom observable
of(10,20,30).pipe(doubleValue()).
subscribe(console.log); // output -- 20,40,60