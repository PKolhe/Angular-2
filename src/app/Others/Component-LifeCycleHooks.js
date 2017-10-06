/* Component Likfe Cycle Hooks

    A component has a lifecycle managed by Angular. Angular
        1. Creates the component
        2. Renders the component
        3. Creates and renders the component children
        4. Checks when the component data-bound properties change, and 
        5. Destroys the component before removing it from the DOM

    The 3 most commonly used hooks are:

        ngOnChanges -
            Executes, every time the value of an input property changes.
            The hook method receives a SimpleChanges object containing current and previous property values.
            This is called before ngOnInit.

        ngOnInit -
            Executes after the constructor and after ngOnChange hook for the first time.
            It is most commonly used for component initialisation and retrieving data from a database.

        ngOnDestroy -
            Executes just before angular destroys the component and generally used for performing cleanup.


    3 Simple Steps to use Life Cycle Hooks:

        Step 1 : Import the Life Cycle Hook interface. For example, to use ngOnInit() life cycle hook, import OnInit interface.

            import { OnInit, OnChanges } from '@angular/core';

        Step 2 : Make the component class implement the Life Cycle Hook interface, using the implements keyword as shown below. This step is optional, but good to have so you will get editor support and flags errors at compile time if you incorrectly implement the interface method or make any typographical errors.

            export class SimpleComponent implements OnInit { }
            export class SimpleComponent implements OnChanges { }

        Step 3 : Write the implementation code for the life cycle interface method. Each interface has a single hook method whose name is the interface name prefixed with ng.

            ngOnInit() {
                console.log('OnInit Life Cycle Hook');
            }

            ngOnChanges(changes: SimpleChanges) {
                for (let propertyName in changes) {
                    let change = changes[propertyName];
                    let current = JSON.stringify(change.currentValue);
                    let previous = JSON.stringify(change.previousValue);
                    console.log(propertyName + ': currentValue = '
                        + current + ', previousValue = ' + previous);
                    // The above line can be rewritten using
                    // placeholder syntax as shown below
                    // console.log(`${propertyName}: currentValue
                    // = ${current }, previousValue = ${previous }`);
                }
            }


*/